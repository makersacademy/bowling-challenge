function BowlingCounter () {
  this.accumulatedScore
};

BowlingCounter.prototype.ball = function (pins) {
  this.accumulatedScore = pins
};

BowlingCounter.prototype.getScore = function () {
  return this.accumulatedScore
};
