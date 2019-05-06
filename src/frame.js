var Frame = function() {
  this._rolls = [];
  this._score = 0;
};

Frame.prototype.pinsHit = function(number) {
  this._rolls.push(number);
};

Frame.prototype.score = function() {
  this._calculateScore();
  return this._score;
};

Frame.prototype.isComplete = function() {
  if (this._rolls.length === 2) { return true };
  return false;
};

Frame.prototype._calculateScore = function() {
  var self = this;
  this._rolls.forEach(function(value) {
    self._score += value;
  });
};
