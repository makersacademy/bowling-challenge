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
    this.gameScore += this.bowlScore;
    this.frameNumber += 1;
  }
  else {
    this.bowlScore = this.currentFrame.secondBowl();
    this.frameScores.push(this.currentFrame.totalFrameScore());
    this.gameScore += this.bowlScore;
  }
  this.roll += 1
  return this.bowlScore;
}

Game.prototype.totalGameScore = function(){
  return this.gameScore;
};

// Game.prototype.frameScore = function(){
//   return this.frameScores;
// };

// Game.prototype.newFrame = function(){
//   this.frameNumber += 1;
// };
