function Scorecard() {
  this._score = 0;
  this._pins = 10;
};

Scorecard.prototype.score = function() {
  return this._score;
};

Scorecard.prototype.pins = function() {
  return this._pins;
};

Scorecard.prototype.throw_1 = function(num) {
  this._score += num;
  this._pins -= num;
};
