function Bowling(scorecard = new Scorecard()) {
  this.scorecard = scorecard
}

Bowling.prototype.roll = function(pins) {
  this.scorecard.addRoll(pins)
}
