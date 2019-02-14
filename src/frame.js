function Frame() {
  this.rolls = [];
  this.isComplete = false;
  this.maxRolls = 2;
}

Frame.prototype.enterRoll = function(score) {
  roll = new Roll();
  roll.enterRoll(score);
  this._storeRolls(roll);
};

Frame.prototype._storeRolls = function(roll) {
  this.rolls.push(roll);
};

Frame.prototype.countRemainingRolls = function() {
  if (this.rolls.length >= this.maxRolls) {
    this.isComplete = true;
  } else {
    runningTotal = 0;
    this.rolls.forEach(roll => {
      runningTotal += roll.returnScore();
    });
    this.markComplete(runningTotal);
  }
};

Frame.prototype.markComplete = function(runningTotal) {
  if (runningTotal >= 10) {
    this.isComplete = true;
  } else {
    this.isComplete = false;
  }
};

Frame.prototype.returnIsComplete = function() {
  return this.isComplete
};
