var Bowling = function() {
  this.currentFrame = [];
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(this.frames.length === 10) {
    throw new Error("You have already played 10 frames.")
  }
  this.currentFrame.push(score1, score2)
  this.frames.push(this.currentFrame)
};

Bowling.prototype.calculateFrame = function() {
  var score = this.currentFrame[0] + this.currentFrame[1];
  this.totalScore += score
  this.currentFrame = []
};
