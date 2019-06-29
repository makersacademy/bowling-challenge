function ScoreCard() {
  this.frames = [];
  this.roll1 = 0;
  this.roll2 = 0;
};

ScoreCard.prototype.addRoll = function (score) {
  this.roll1 = score
};
