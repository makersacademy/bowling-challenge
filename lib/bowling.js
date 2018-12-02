function ScoreCard() {
  this.roll = 0
  this.frameScore = []
}

ScoreCard.prototype.frameOne = function() {
  this._rollOne();
};

ScoreCard.prototype._rollOne = function() {
  if (this.roll += 1) {
    this.frameScore.push(this.roll);
  };
};
