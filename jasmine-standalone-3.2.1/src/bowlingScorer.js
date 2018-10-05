function BowlingScorer() {
  this._scoreCard = [];
}

BowlingScorer.prototype.roll = function(pinsDown) {
  this._scoreCard.push(pinsDown);
}

BowlingScorer.prototype.finalScore = function() {
  return this._scoreCard.reduce(sumTotal);
}

function sumTotal(total, num) {
  return total + num;
}
