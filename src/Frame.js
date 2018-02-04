function Frame() {
  this.bowls = []
  this.matchScores = []
  this.runningTotal = 0
  this.isPreviouslySpare = false
  this.isPreviouslyStrike = false
  this.doubleStrikeBonus = false
  this.lastFrame = false
  this.finalRolls = []
};

Frame.prototype.roll = function(number) {
  this.bowls.push(number)
};

Frame.prototype.finalRoll = function(number) {
  this.finalRolls.push(number)
};

Frame.prototype.endFrame = function() {
  if (this.lastFrame) {
    this.adjustsForStrike()
    this.adjustsForSpare()
    this.assignsStrikeOrSpare();
    this.recalculateTotal();
  } else {
    this.assignsFinalFrame()
    this.matchScores.push(this.Score())
    this.adjustsForStrike()
    this.adjustsForSpare()
    this.assignsStrikeOrSpare();
    this.recalculateTotal();
    this.bowls = []
    if (this.lastFrame) {
      if (this.isPreviouslySpare) {
        return "One more roll"
      } else if (this.isPreviouslyStrike) {
        return "Two more rolls"
      } else {
        return "Game over"
      }
    }
  };
};

Frame.prototype.recalculateTotal = function() {
  this.runningTotal = 0
  for(var i in this.matchScores) { this.runningTotal += this.matchScores[i]; }
};

Frame.prototype.Score = function() {
  if (this.bowls.length === 1) {
    return (this.bowls[0])
  } else {
    return (this.bowls[0] + this.bowls[1])
  }
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

Frame.prototype.assignsStrikeOrSpare = function() {
  if (this.bowls[0] === 10) {
    this.isPreviouslyStrike = true
    this.isPreviouslySpare = false;
  } else {
    this.isPreviouslyStrike = false
    this.assignsSpare();
  }
};

Frame.prototype.adjustsForStrike = function() {
  if (this.isPreviouslyStrike) {
    this.matchScores[this.matchScores.length-2] += this.Score()
    this.adjustsForDoubleStrike()
    this.assignsDoubleStrikeBonus();
  }
};

Frame.prototype.adjustsForDoubleStrike = function() {
  if (this.doubleStrikeBonus) {
    this.matchScores[this.matchScores.length-3] += this.bowls[0]
  }
};

Frame.prototype.adjustsForSpare = function() {
  if (this.isPreviouslySpare) {
    this.matchScores[this.matchScores.length-2] += this.bowls[0]
  }
};

Frame.prototype.assignsFinalFrame = function() {
  if (this.matchScores.length === 9) {
    this.lastFrame = true
  }
};
