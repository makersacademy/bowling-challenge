function Scorecard() {
  this._score = 0
}

Scorecard.prototype.showScore = function() {
  return this._score;
}

Scorecard.prototype.enterScore = function(pins) {
  this._score += pins;
}
