function BowlingScorer() {
  this._score = 0;
}

BowlingScorer.prototype.score = function() {
  return this._score;
};

BowlingScorer.prototype.addFrame = function(roll1, roll2) {
  this._score += roll1 + roll2;
};