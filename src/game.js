var Game = function(){
    this.totalScore = 0;
    this.frame = 1;
    this.theLastFrame;
    this.theLastFrameScore = 0;
    this.currentFrame;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.updateTotalScore = function (frame) {
  frameScore = frame.getCurrentScore();
  if(this.theLastFrame === 'Strike') {
    this.totalScore += frameScore;
  }
  this.totalScore += frameScore;
  this.strikeOrSpare(frame);
  this.theLastFrameScore = frameScore;
  this.addFrame();
};

Game.prototype.addFrame = function () {
  ++ this.frame;
};

Game.prototype.getFrameNumber = function(){
  if(this.frame > 10){
    return "Game over!"
  } else {
    return this.frame;
  };
};

Game.prototype.updateLastFrame = function (frameScore) {
  if(this.theLastFrame === 'Strike') {
    this.theLastFrameScore += frameScore
  }
};

Game.prototype.checkLastFrame = function (frameScore) {
  this.updateLastFrame(frameScore);
  return this.theLastFrameScore;
};

Game.prototype.strikeOrSpare = function (frame) {
  if (frame.isStrike()) return this.theLastFrame = 'Strike';
  if(frame.isSpare()) return this.theLastFrame = 'Spare';
  return false
};
