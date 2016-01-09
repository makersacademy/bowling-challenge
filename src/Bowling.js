var Bowling = function(frame) {
  this.frame = frame || new Frame();
  this.currentFrame = [];
  this.currentFrameScore = 0;
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(this.frames.length === 10) {
    throw new Error("You have already played 10 frames.")
  }
  this.frame.record(score1, score2);
  this.frames.push(this.frame)
};

Bowling.prototype.calculateFrameScore = function() {
  this.currentFrameScore = this.frame.calculateScore();
  this.frame = new Frame();
};

Bowling.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames[0].score;
}
