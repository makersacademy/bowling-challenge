function Game() {
  this.frameCount = 1;
  this.currentFrame = new CurrentFrame();
  this.score = new Score().currentScore;
}

Game.prototype.playFrame = function() {
  this.currentFrame.shotCount == 2 ? this.frameCount += 1 : this.frameCount = this.frameCount;
  this.score += this.currentFrame.shotOne();
  if(this.currentFrame.first === 10) {
    this.frameCount += 1;
  }
};

  // Game.prototype.strike = function () {
  //   this.currentFrame.first === 10 ? return true : return false;
  // };
