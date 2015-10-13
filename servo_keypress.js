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

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    // moves certain servo when a certain letter is pressed

    if ( key.name === 'a' ) {
      console.log(' Moving Servo')
      myServo2.to(180, 200);
    }
  });
});
