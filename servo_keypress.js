var five = require('johnny-five');
var client = require('socket.io-client');
var socket = client.connect('http://localhost:8081');

var myBoard = new five.Board();
myBoard.on("ready", function() {
  // create servo instances
  // number corresponds to port number on Arduino
  Servo2 = new five.Servo(2);
  Servo3 = new five.Servo(3);
  Servo4 = new five.Servo(4);
  Servo5 = new five.Servo(5);
  Servo6 = new five.Servo(6);
  Servo8 = new five.Servo(8);
  Servo9 = new five.Servo(9);
  Servo10 = new five.Servo(10);

  // center all servos before keypresses happen
  Servo2.center();
  Servo3.center();
  Servo4.center();
  Servo5.center();
  Servo6.center();
  Servo8.center();
  Servo9.center();
  Servo10.center();

  // recenters the servo after it has moved
  function centerServoAfterMove(servo) {
    servo.on('move:complete', function(){
      console.log('Moving back to center');
      servo.center();
    });
  }

  centerServoAfterMove(Servo2);
  centerServoAfterMove(Servo3);
  centerServoAfterMove(Servo4);
  centerServoAfterMove(Servo5);
  centerServoAfterMove(Servo6);
  centerServoAfterMove(Servo8);
  centerServoAfterMove(Servo9);
  centerServoAfterMove(Servo10);

  // creating hash table to map the string from ln 60 to servo object
  var servoStringtoObject = {};

  servoStringtoObject['Servo2'] = Servo2;
  servoStringtoObject['Servo3'] = Servo3;
  servoStringtoObject['Servo4'] = Servo4;
  servoStringtoObject['Servo5'] = Servo5;
  servoStringtoObject['Servo6'] = Servo6;
  servoStringtoObject['Servo8'] = Servo8;
  servoStringtoObject['Servo9'] = Servo9;
  servoStringtoObject['Servo10'] = Servo10;

  // listen for specific event to trigger servo movement
  socket.on('moveServo', function(servo){
    servoStringtoObject[servo].to(180, 200)
    console.log('Moving ' + servo);
  });
});
