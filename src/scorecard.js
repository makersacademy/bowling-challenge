function Scorecard() {
  this._score = 0;
  this._frame = 1;
}

Scorecard.prototype.showScore = function() {
  return this._score;
}

Scorecard.prototype.enterScore = function(pins) {
  this._score += pins;
}

Scorecard.prototype.isFrame = function() {
  return this._frame
}
