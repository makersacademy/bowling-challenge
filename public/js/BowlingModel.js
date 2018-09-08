function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.rollDecider = new RollDecider();
};

BowlingModel.prototype.increment = function(knockedPins) {
  this.scoreCalculator.increment(knockedPins);
  this.rollDecider.increment(knockedPins);
};
