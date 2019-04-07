function Frame() {
  this._rolls = [];
}

Frame.prototype.addRoll = function(roll) {
  this._rolls.push(roll);
}

Frame.prototype.score = function() {
  return this._rolls.reduce(function(a, b) { return a + b; }, 0);
}

Frame.prototype.rolls = function() {
  return this._rolls;
}
