var Bowling = function(frame) {
  this.frame = frame || new Frame();
  this.currentFrame = null;
  this.currentFrameScore = 0;
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(this.frames.length === 10) {
    throw new Error("You have already played 10 frames.")
  }
  this.frame.record(score1, score2);
  if(this.frames.length !== 0) {
    this.checkBonus(score1);
  }
  this.currentFrame = this.frame
  this.frames.push(this.frame)
};

Bowling.prototype.calculateFrameScore = function() {
  this.currentFrameScore = this.frame.calculateScore();
  this.frame = new Frame();
};

Bowling.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames[0].score;
}

Bowling.prototype.checkBonus = function(score1) {
  if(this.currentFrame.score === 10) {
    this.currentFrame.bonus = score1
  }
  // if(this.frames.length === 1) {
  //   if(this.frames[this.frames.length -1].score === 10) {
  //     this.frames[this.frames.length -1].bonus = score1;
  //   }
  // } else {
  //   if(this.frames[this.frames.length -2].score === 10) {
  //     this.frames[this.frames.length -2].bonus = score1;
  //   }
  // }
}
