function Game(){
  this.frameNumber = 0;
  this.frameScores = [];
  this.gameScore = 0;
  this.currentFrame = new Frame();
  this.roll = 0;
  this.bowlScore = 0;
}

Game.prototype.bowl = function () {
  if (this.roll % 2 === 0) {
    this.bowlScore = this.currentFrame.firstBowl();
    this.frameNumber += 1;
  }
  else {
    this.bowlScore = this.currentFrame.secondBowl();
    this.frameScores.push(this.currentFrame.totalFrameScore());
    this.totalGameScore();
    this.currentFrame = new Frame();
  }
  this.roll += 1
  return this.bowlScore;
}

Game.prototype.totalGameScore = function(){
  this.gameScore = this.frameScores.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
};
