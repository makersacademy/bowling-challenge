function Game(){
  this.currentFrame = new Frame();
  this.framesPlayed = 0;
  this._frames = [];
  this.score = 0;
  this.bonusShots = 0;
}

Game.prototype.nextFrame = function () {
  // checkLastFrame();
  // checkFrameOver();
  // checkSpare();
  // checkStrike();
  // addScore();
  this.framesPlayed ++;
  // addFrame();
};

Game.prototype.addScore = function () {
  this.score += this.currentFrame.score
};
