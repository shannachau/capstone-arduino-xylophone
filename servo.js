// **COMMENTS** ARE FOR ADVANCED/CUSTOMIZATION SET UP

var five = require('johnny-five');
var client = require('socket.io-client');
var socket = client.connect('http://still-sands-6354.herokuapp.com:80');
// ** USE COMMENTED LINE BELOW INSTEAD IF HOSTING SERVER ON LOCAL MACHINE **
// var socket = client.connect('http://localhost:8081');

var myBoard = new five.Board();
myBoard.on("ready", function() {
  // create servo instances
  // number corresponds to port number on Arduino
  var Servo2 = new five.Servo(2);
  var Servo3 = new five.Servo(3);
  var Servo4 = new five.Servo(4);
  var Servo5 = new five.Servo(5);
  var Servo6 = new five.Servo(6);
  var Servo8 = new five.Servo(8);
  var Servo9 = new five.Servo(9);
  var Servo10 = new five.Servo(10);
  // ** CREATE NEW SERVO INSTANCES HERE **

  // center all servos before keypresses happen
  Servo2.center();
  Servo3.center();
  Servo4.center();
  Servo5.center();
  Servo6.center();
  Servo8.center();
  Servo9.center();
  Servo10.center();
  // ** CENTER NEW SERVO INSTANCES HERE **

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
  // ** ADD NEW SERVO INSTANCES HERE **

  // creating hash table to map the string to servo object
  var servoStringtoObject = {};

  servoStringtoObject['Servo2'] = Servo2;
  servoStringtoObject['Servo3'] = Servo3;
  servoStringtoObject['Servo4'] = Servo4;
  servoStringtoObject['Servo5'] = Servo5;
  servoStringtoObject['Servo6'] = Servo6;
  servoStringtoObject['Servo8'] = Servo8;
  servoStringtoObject['Servo9'] = Servo9;
  servoStringtoObject['Servo10'] = Servo10;
  // ** ADD NEW KEY VALUE PAIR FOR NEW SERVOS HERE **

  // listen for specific event to trigger servo movement
  socket.on('moveServo', function(servo){
    // moves the servo 180 degrees in 200ms
    // adjust these numbers to change the speed/angle at which your servo moves
    servoStringtoObject[servo].to(180, 115)
    console.log('Moving ' + servo);
  });
});
