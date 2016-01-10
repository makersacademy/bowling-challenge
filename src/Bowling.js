var Bowling = function(frame) {
  this.frame = frame || new Frame();
  this._totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(!this.isValidTotal(score1, score2)) {
    throw new Error("Not a valid score: sum must be 10 or less")
  }
  if(this.frames.length === 10) {
    throw new Error("You have already played 10 frames.")
  }
  this.frame.record(score1, score2);
  if(this.frames.length !== 0) {
    this.checkBonus(score1, score2);
  }
  this.frames.push(this.frame)
};

Bowling.prototype.thirdRoll = function(score3) {
  if(this.frames.length !== 10) {
    throw new Error("Cannot play 3rd roll: this is not the 10th frame")
  }
  if(this.frame.score !== 10) {
    throw new Error
    ("Cannot play 3rd roll: you have not scored a spare or strike")
  }
  this.frame.addThirdRoll(score3);
};

Bowling.prototype.calculateFrameScore = function() {
  this.frame.calculateScore();
  this.frame = new Frame();
};

Bowling.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames.reduce(function
    (previousValue,currentValue,currentIndex)
  {
    return previousValue.score + currentValue.score;
  });
}

Bowling.prototype.checkBonus = function(score1, score2) {
  var previousFrame = this.frames[this.frames.length -1]
  if(previousFrame.rolls[0] === 10) {
    previousFrame.bonus = (score1 + score2);
  } else if(previousFrame.score === 10) {
    previousFrame.bonus = score1
  }
}

Bowling.prototype.isValidTotal = function(score1, score2) {
  return (score1 + score2) <= 10
};
