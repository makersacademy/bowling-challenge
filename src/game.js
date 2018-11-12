var Game = function(){
    this.totalScore = 0;
    this.frameNumber = 1;
    this.thePreviousFrame = null;
    this.thePreviousFrameScore = 0;
    this.currentFrameScore = 0;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.getCurrentFrameScore = function (frame) {
  this.currentFrameScore = frame.getCurrentScore();
};

Game.prototype.updateTotalScore = function (frame, roll1) {
  this.getCurrentFrameScore(frame);
  this.bonusPoints(roll1);
  this.totalScore += this.currentFrameScore;
  this.strikeOrSpare(frame);
  this.thePreviousFrameScore = this.currentFrameScore;
  this.addFrame();
};

Game.prototype.bonusPoints = function (roll1) {
  if(this.thePreviousFrame === 'Strike') {
    this.totalScore += this.currentFrameScore;
  } else if(this.thePreviousFrame === 'Spare') {
    this.totalScore += roll1;
  }
};

Game.prototype.addFrame = function () {
  ++ this.frameNumber;
};

Game.prototype.getFrameNumber = function(){
  if(this.frameNumber > 10){
    return "Game over!";
  } else {
    return this.frameNumber;
  }
};

Game.prototype.checkLastFrameScore = function (frameScore) {
  return this.thePreviousFrameScore;
};

Game.prototype.strikeOrSpare = function (frame) {
  if (frame.isStrike()) {
    this.thePreviousFrame = 'Strike';
  } else if(frame.isSpare()) {
    this.thePreviousFrame = 'Spare';
  } else {
    this.thePreviousFrame = false;
  }
  return this.thePreviousFrame;
};
