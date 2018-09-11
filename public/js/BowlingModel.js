"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
};

BowlingModel.prototype.play = function(pins) {
  // decide what the next frame and roll should be
  var nextTurn = this.incrementGame(pins);

  // update score array
  var game = this.scoreCalculator.calculate(pins);

  // calculate current total
  this.scoreCalculator.updateTurn(nextTurn);

  // return all relevant information
  return { frame: nextTurn.frame, roll: nextTurn.roll, total: game.total, scoresArray: game.scoresArray }
};


// if strike: tell turnincrementer to increment frame
// if not strike: tell turnincrementer to increment turn


BowlingModel.prototype.incrementGame = function(pins) {
  if (this.isStrike(pins)) {
    return this.turnIncrementer.incrementFrame()
  } else { return this.turnIncrementer.incrementTurn() };
};

BowlingModel.prototype.isComplete = function() {

};

BowlingModel.prototype.isStrike = function(pins) {
  return pins === 10
};

BowlingModel.prototype.isSpare = function(pins) {

};
