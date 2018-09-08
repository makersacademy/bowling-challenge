"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
};

BowlingModel.prototype.increment = function(knockedPins) {
  var score, nextTurn;
  nextTurn = this.turnIncrementer.increment(knockedPins);
  score = this.scoreCalculator.increment(knockedPins, nextTurn);
  console.log("score = " + score)
  return { frame: nextTurn.frame, roll: nextTurn.roll, score: score }
};
