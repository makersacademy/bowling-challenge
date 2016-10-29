function Frame() {
  this._rolls = [];
}

Frame.prototype.isComplete = function() {
  return this._rolls.length === 2;
};

Frame.prototype.addRoll = function(n) {
  if (n > 10) { throw new Error('Cannot add a roll over 10') }
  if (!this.isComplete()) {
    this._rolls.push(n);
  }
};

Frame.prototype.rollsContain = function(n) {
  return this._rolls[0] === n || this._rolls[1] === n;
};
