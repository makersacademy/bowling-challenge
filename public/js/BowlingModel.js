"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.rollDecider = new RollDecider();
};

BowlingModel.prototype.increment = function(knockedPins) {
  var score, turn;
  score = this.scoreCalculator.increment(knockedPins);
  turn = this.rollDecider.increment(knockedPins);
  return { frame: turn.frame, roll: turn.roll, score: score }
};
