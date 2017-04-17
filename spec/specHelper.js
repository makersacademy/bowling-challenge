
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
  frame2.bowlSecondBall(2);
  myShortGame.addFrame(frame2);

  frame3 = new Frame();
  frame3.bowlFirstBall(10);
  myShortGame.addFrame(frame3);

  frame4 = new Frame();
  frame4.bowlFirstBall(3);
  frame4.bowlSecondBall(2);
  myShortGame.addFrame(frame4);
  return myShortGame;
}

SpecHelper.prototype.spareBonusScoringGame = function() {
  testBonusGame = new Game(2);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(6);
  testBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(5);
  testBonusGame.addFrame(frame2);
  return testBonusGame;
}

SpecHelper.prototype.complexSpareBonusScoringGame = function() {
  complexTestBonusGame = new Game(6);
  frame1 = new Frame();
  frame1.bowlFirstBall(4);
  frame1.bowlSecondBall(6);
  complexTestBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(6);
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
  frame5.bowlSecondBall(5);
  complexTestBonusGame.addFrame(frame5);

  frame6 = new Frame();
  frame6.bowlFirstBall(3);
  frame6.bowlSecondBall(5);
  complexTestBonusGame.addFrame(frame6);
  return complexTestBonusGame;
}

SpecHelper.prototype.strikeBonusScoringGame = function() {
  testBonusGame = new Game(2);
  frame1 = new Frame();
  frame1.bowlFirstBall(10);
  testBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(5);
  testBonusGame.addFrame(frame2);
  return testBonusGame;
}

SpecHelper.prototype.consecutiveStrikeBonusScoringGame = function() {
  consecutiveStrikeBonusGame = new Game(6);
  frame1 = new Frame();
  frame1.bowlFirstBall(10);
  consecutiveStrikeBonusGame.addFrame(frame1);

  frame2 = new Frame();
  frame2.bowlFirstBall(4);
  frame2.bowlSecondBall(6);
  consecutiveStrikeBonusGame.addFrame(frame2);

  frame3 = new Frame();
  frame3.bowlFirstBall(10);
  consecutiveStrikeBonusGame.addFrame(frame3);

  frame4 = new Frame();
  frame4.bowlFirstBall(10);
  consecutiveStrikeBonusGame.addFrame(frame4);

  frame5 = new Frame();
  frame5.bowlFirstBall(5);
  frame5.bowlSecondBall(5);
  consecutiveStrikeBonusGame.addFrame(frame5);

  frame6 = new Frame();
  frame6.bowlFirstBall(3);
  frame6.bowlSecondBall(5);
  consecutiveStrikeBonusGame.addFrame(frame6);
  return consecutiveStrikeBonusGame;
}
