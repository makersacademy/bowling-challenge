function ScoreCard() {
  this.frames = [];
  this.roll1 = 0;
  this.roll2 = 0;
};

ScoreCard.prototype.addRoll = function (score) {
  if (this.isRoll1()) {
    this.roll1 = score;
  } else {
    this.roll2 = score;
  }
};

ScoreCard.prototype.isRoll1 = function () {
  return this.roll1 === 0;
};
