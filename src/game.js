var Game = function(){
    this.totalScore = 0;
    this.frame = 1;
    this.theLastFrame;
    this.currentFrame;
};

Game.prototype.getTotalScore = function () {
  return this.totalScore;
};

Game.prototype.updateTotalScore = function (frameScore) {
  if(this.theLastFrame >= 10) {
    this.totalScore += frameScore;
  }
  this.totalScore += frameScore;
  this.theLastFrame = frameScore;
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
  if(this.theLastFrame === 10) {
    this.theLastFrame += frameScore
  }
};

Game.prototype.checkLastFrame = function (frameScore) {
  this.updateLastFrame(frameScore);
  return this.theLastFrame;
};

Game.prototype.strikeOrSpare = function (frame) {
  if (frame.isStrike()) return true;
  if(frame.isSpare()) return true;
  return false
};
