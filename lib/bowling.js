function ScoreCard() {
  this.defaultRollValue = 0
  this.rollOne = 0
  this.frameScore = []
}

ScoreCard.prototype.frameOne = function() {
  if (this.rollOne += 1) {
    this.frameScore.push(this.rollOne);
  };
};
