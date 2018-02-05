function Frame() {
  this.bowls = []
  this.matchScores = []
  this.runningTotal = 0
  this.isPreviouslySpare = false
  this.isPreviouslyStrike = false
  this.doubleStrikeBonus = false
  this.isLastFrame = false
};
// frame
Frame.prototype.roll = function(number) {
  this.bowls.push(number)
};

Frame.prototype.closeFrame = function() {
  if (this.isLastFrame) {
    this.updatesScoring();
  } else {
    this.notFinalFrame()
  };
  return (this.finalFrameAlerts())
};

Frame.prototype.notFinalFrame = function() {
  this.assignsFinalFrame()
  this.matchScores.push(this.Score())
  this.updatesScoring()
  this.emptyFrame()
};

Frame.prototype.assignsFinalFrame = function() {
  if (this.matchScores.length === 9) {
    this.isLastFrame = true
  }
};

Frame.prototype.Score = function() {
  if (this.bowls.length === 1) {
    return (this.bowls[0])
  } else {
    return (this.bowls[0] + this.bowls[1])
  }
};

Frame.prototype.emptyFrame = function() {
  this.bowls = []
};

Frame.prototype.assignsDoubleStrikeBonus = function() {
  if (this.bowls[0] === 10) {
    this.doubleStrikeBonus = true
  } else {
    this.doubleStrikeBonus = false
  }
};

Frame.prototype.assignsSpare = function() {
  if (this.Score() === 10) {
    this.isPreviouslySpare = true
  } else {
    this.isPreviouslySpare = false
  }
};

Frame.prototype.updatesScoring = function() {
  this.adjustsForStrike();
  this.adjustsForSpare();
  this.assignsStrikeOrSpare();
  this.recalculateTotal();
};

Frame.prototype.adjustsForStrike = function() {
  if (this.isPreviouslyStrike) {
    this.matchScores[this.matchScores.length-2] += this.Score()
    this.adjustsForDoubleStrike();
    this.assignsDoubleStrikeBonus();
  }
};

Frame.prototype.adjustsForSpare = function() {
  if (this.isPreviouslySpare) {
    this.matchScores[this.matchScores.length-2] += this.bowls[0]
  }
};

Frame.prototype.assignsStrikeOrSpare = function() {
  if (this.bowls[0] === 10) {
    this.isPreviouslyStrike = true
    this.isPreviouslySpare = false;
  } else {
    this.isPreviouslyStrike = false
    this.assignsSpare();
  }
};

Frame.prototype.adjustsForDoubleStrike = function() {
  if (this.doubleStrikeBonus) {
    this.matchScores[this.matchScores.length-3] += this.bowls[0]
  }
};

Frame.prototype.recalculateTotal = function() {
  this.runningTotal = 0
  for(var i in this.matchScores) { this.runningTotal += this.matchScores[i]; }
};

Frame.prototype.finalFrameAlerts = function() {
  if (this.isLastFrame) {
    if (this.isPreviouslySpare) {
      return "One more roll"
    } else if (this.isPreviouslyStrike) {
      return "Two more rolls"
    } else {
      return "Game over"
    }
  }
};
