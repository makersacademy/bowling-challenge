var Bowling = function(frame) {
  this.frame = frame || new Frame();
  this.currentFrame = null;
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(this.frames.length === 10) {
    throw new Error("You have already played 10 frames.")
  }
  this.frame.record(score1, score2);
  if(this.frames.length !== 0) {
    this.checkBonus(score1, score2);
  }
  this.currentFrame = this.frame
  this.frames.push(this.frame)
};

Bowling.prototype.thirdRoll = function(score3) {
  this.frame.addThirdRoll(score3);
};

Bowling.prototype.calculateFrameScore = function() {
  this.frame.calculateScore();
  this.frame = new Frame();
};

Bowling.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames[0].score;
}

Bowling.prototype.checkBonus = function(score1, score2) {
  if(this.currentFrame.rolls[0] === 10) {
    this.currentFrame.bonus = (score1 + score2);
  } else if(this.currentFrame.score === 10) {
    this.currentFrame.bonus = score1
  }
}
