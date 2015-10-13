var five = require("johnny-five");
var keypress = require("keypress");
var myBoard, myServo;

keypress(process.stdin);
myBoard = new five.Board();
myBoard.on("ready", function() {

  // create servo instances
  myServo2 = new five.Servo(2);
  myServo3 = new five.Servo(3);
  myServo4 = new five.Servo(4);
  myServo5 = new five.Servo(5);
  myServo6 = new five.Servo(6);

  myServo8 = new five.Servo(8);
  myServo9 = new five.Servo(9);
  myServo10 = new five.Servo(10);

  // center all servos before keypresses happen
  myServo2.center();
  myServo3.center();
  myServo4.center();
  myServo5.center();
  myServo6.center();

  myServo8.center();
  myServo9.center();
  myServo10.center();

  // callback that happens after a servo is moved from a keypress
  // recenters the servo
  function centerServoAfterMove(servo) {
    servo.on("move:complete", function(){
      console.log(' Moving a back to center')
      servo.center();
    });
  }

  centerServoAfterMove(myServo2);
  centerServoAfterMove(myServo3);
  centerServoAfterMove(myServo4);
  centerServoAfterMove(myServo5);
  centerServoAfterMove(myServo6);
  centerServoAfterMove(myServo8);
  centerServoAfterMove(myServo9);
  centerServoAfterMove(myServo10);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    // moves certain servo when a certain letter is pressed
    function moveServo(letter, servo) {
      if ( key.name === letter ) {
        console.log(' Moving Servo')
        servo.to(180, 200);
      }
    }

    moveServo('a', myServo2);
    moveServo('s', myServo3);
    moveServo('d', myServo4);
    moveServo('f', myServo5);
    moveServo('g', myServo6);
    moveServo('h', myServo8);
    moveServo('j', myServo9);
    moveServo('k', myServo10);

  });
});
