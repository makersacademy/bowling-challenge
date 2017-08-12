function Scorecard() {
  this._score = 0;
}

Scorecard.prototype.score = function() {
  return this._score;
};

Scorecard.prototype.roll = function(amount) {
  this._score += amount;
};
