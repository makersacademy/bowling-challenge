
var SpecHelper = function() {
}

SpecHelper.prototype.shortGame = function() {
  myShortGame = new Game(3);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(3);
  frame1.calculateFrameTotal();
  myShortGame.addFrame(frame1);
  frame2 = new Frame();
  frame2.bowlFirstBall(8);
  frame2.bowlSecondBall(2); // SPARE
  frame2.calculateFrameTotal();
  myShortGame.addFrame(frame2);
  frame3 = new Frame();
  frame3.bowlFirstBall(10); // STRIKE
  frame3.calculateFrameTotal();
  myShortGame.addFrame(frame3);
  return myShortGame;
}
