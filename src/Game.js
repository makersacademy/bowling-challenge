function Game(){
  this.frameNumber = 1;
  this.frameScores = [];
  this.currentFrame = new Frame();
  this.roll = 1;
  this.bowlScore = 0;
}

Game.prototype.bowl = function () {
  if (this.roll % 2 !== 0) {
    this.bowlScore = this.currentFrame.firstBowl();
  }
  else {
    this.bowlScore = this.currentFrame.secondBowl();
    this.frameNumber += 1;
  }
  this.roll += 1;
  return this.bowlScore;
}

Game.prototype.newFrame = function(){
  this.frameNumber += 1;
};
