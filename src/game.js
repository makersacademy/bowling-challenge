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
  ++ this.frame;
};

Game.prototype.getFrameNumber = function(){
  if(this.frame > 10){
    return "Game over!"
  } else {
    return this.frame;
  };
};

Game.prototype.checkLastFrame = function (frameScore) {
  if(this.theLastFrame === 10) {
    this.theLastFrame += frameScore
  }
  return this.theLastFrame;
};
