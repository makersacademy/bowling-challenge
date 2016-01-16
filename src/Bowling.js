var Bowling = function(frame) {
  this.frame = frame || new Frame();
  this.totalScore = 0;
  this.frames = [];
};

Bowling.prototype.play = function(score1, score2) {
  if(!this.isValidTotal(score1, score2)) {
    throw new Error("Not a valid score: sum must be 10 or less")
  }
  if(this.gameFinished()) {
    throw new Error("You have already played 10 frames.")
  }
  this.frame.record(score1, score2);
  if(this.frames.length > 0) {
    this.checkBonus(score1, score2);
  }
  this.frames.push(this.frame)
};

Bowling.prototype.bonusRoll = function(bonus1) {
  if(!this.gameFinished()) {
    throw new Error('Cannot play bonus roll: this is not the 10th frame')
  }
  if(!this.frame.strike) {
    throw new Error('Cannot play bonus roll: you have not scored a strike')
  }
  this.frame.addBonus(bonus1);
  var previousFrame = this.frames[this.frames.length -2]
  if(previousFrame.strike) {
    previousFrame.addBonus(bonus1)
  }
}

Bowling.prototype.thirdRoll = function(bonus) {
  if(!this.gameFinished()) {
    throw new Error("Cannot play 3rd roll: this is not the 10th frame")
  }
  if(this.frame.score < 10) {
    throw new Error
    ("Cannot play 3rd roll: you have not scored a spare or strike")
  }
  this.frame.addBonus(bonus);
};

Bowling.prototype.completeFrame = function() {
  this.frame.calculateScore();
  this.frame = new Frame();
};

Bowling.prototype.calculateTotalScore = function() {
  Array.prototype.sum = function(prop) {
    var total = 0
    for(var i=0, _len = this.length; i < _len; i++){
      total += this[i][prop]
    }
    return total
  }
  this.totalScore = this.frames.sum("score")
}

Bowling.prototype.checkBonus = function(score1, score2) {
  var previousFrame = this.frames[this.frames.length -1]

  if(previousFrame.strike) {
    previousFrame.addBonus(score1, score2);
  }
  if(previousFrame.spare) {
    previousFrame.addBonus(score1);
  }
  if(this.frames.length > 1 && this.twoConsecutiveStrikes()) {
      this.frames[this.frames.length-2].addBonus(score1);
  }
}

Bowling.prototype.isValidTotal = function(score1, score2) {
  score2 = typeof score2 !== undefined ? score2 : 0
  return (score1 + score2) <= 10;
};

Bowling.prototype.gameFinished = function() {
  return this.frames.length === 10
}

Bowling.prototype.twoConsecutiveStrikes = function() {
  var previousFrame = this.frames[this.frames.length-1]
  var secondToLastFrame = this.frames[this.frames.length-2]
  if(previousFrame.strike && secondToLastFrame.strike) {
    return true;
  }
};
