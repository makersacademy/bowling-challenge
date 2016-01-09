var Bowling = function() {
  this.currentFrame = [];
  this.currentFrameScore = 0;
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(this.frames.length === 20) {
    throw new Error("You have already played 10 frames.")
  }
  this.currentFrame.push(score1, score2)
  this.frames.push(this.currentFrame[0])
  this.frames.push(this.currentFrame[1])
};

Bowling.prototype.calculateFrameScore = function() {
  this.currentFrameScore = this.currentFrame[0] + this.currentFrame[1];
  this.currentFrame.splice(0,2)
};

Bowling.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames.reduce(function(prev, curr, index) {
    return prev + curr;
  });
}
