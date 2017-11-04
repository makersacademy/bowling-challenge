function Frame(firstRoll, previousFrame) {
  this.firstRoll = firstRoll;
  this.secondRoll = null;
  this._bonusRollsRequired = this.isStrike() ? 2 : 0;
  this.bonus = 0;
  if (previousFrame) {
    previousFrame.ifBonusRequired(firstRoll);
  }
  this.previousFrame = previousFrame;
}

Frame.prototype.bonusRollsRequired = function() {
  return this._bonusRollsRequired;
}

Frame.prototype.total = function() {
  return this.firstRoll + this.secondRoll;
};

Frame.prototype.addRoll = function(secondRoll) {
  this.secondRoll = secondRoll;
  if (this.isSpare()) {
    this._bonusRollsRequired = 1;
  }
  if (this.previousFrame) {
    this.previousFrame.ifBonusRequired(secondRoll);
  }
};

Frame.prototype.isOngoing = function() {
  return this.secondRoll === null && !this.isStrike();
};

Frame.prototype.isStrike = function() {
  return this.firstRoll === 10;
};

Frame.prototype.isSpare = function() {
  return !this.isStrike() && this.total() === 10;
};

Frame.prototype.ifBonusRequired = function(rollValue) {
  if (this.previousFrame && this.previousFrame.bonusRollsRequired() > 0) {
    this.previousFrame.ifBonusRequired(rollValue);
  }
  if (this.bonusRollsRequired() > 0) {
    this.bonus += rollValue;
    this._bonusRollsRequired -= 1;
  }
}

Frame.prototype._getRunningTotal = function(runningTotal) {
  if (!this.previousFrame) {
    return runningTotal + this.total() + this.bonus;
  }
  else {
    return this.previousFrame._getRunningTotal(this.total() + this.bonus + runningTotal);
  }
}

Frame.prototype.runningTotal = function() {
  return this._getRunningTotal(0);
}
