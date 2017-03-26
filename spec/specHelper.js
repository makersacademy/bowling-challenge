
var SpecHelper = function() {
}

SpecHelper.prototype.shortGame = function() {
  myShortGame = new Game(4);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(3);
  myShortGame.addFrame(frame1);
  frame2 = new Frame();
  frame2.bowlFirstBall(8);
  frame2.bowlSecondBall(2); // SPARE
  myShortGame.addFrame(frame2);
  frame3 = new Frame();
  frame3.bowlFirstBall(10); // STRIKE
  myShortGame.addFrame(frame3);
  frame4 = new Frame();
  frame4.bowlFirstBall(3);
  frame4.bowlSecondBall(2);
  myShortGame.addFrame(frame4);
  return myShortGame;
  // 47
}

SpecHelper.prototype.spareBonusScoringGame = function() {
  testBonusGame = new Game(2);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(6); // SPARE
  testBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(5);
  testBonusGame.addFrame(frame2);
  return testBonusGame;
  // first frame 10 + next roll 4 + second frame => 10 + 4 + 9 = 23
}

SpecHelper.prototype.complexSpareBonusScoringGame = function() {
  complexTestBonusGame = new Game(6);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(6); // SPARE
  complexTestBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(6); // SPARE
  complexTestBonusGame.addFrame(frame2);

  frame3 = new Frame();
  frame3.bowlFirstBall(2);
  frame3.bowlSecondBall(5);
  complexTestBonusGame.addFrame(frame3);

  frame4 = new Frame();
  frame4.bowlFirstBall(7);
  frame4.bowlSecondBall(3);
  complexTestBonusGame.addFrame(frame4);

  frame5 = new Frame();
  frame5.bowlFirstBall(5);
  frame5.bowlSecondBall(5); // SPARE
  complexTestBonusGame.addFrame(frame5);

  frame6 = new Frame();
  frame6.bowlFirstBall(3);
  frame6.bowlSecondBall(5);
  complexTestBonusGame.addFrame(frame6);
  return complexTestBonusGame;
  // => 69
}

SpecHelper.prototype.strikeBonusScoringGame = function() {
  testBonusGame = new Game(2);
  frame1 = new Frame();
  frame1.bowlFirstBall(10); // STRIKE
  testBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(5);
  testBonusGame.addFrame(frame2);
  return testBonusGame;
  // first frame 10 + next roll 4 + next roll 5 + next frame 9
  // => 28
}
