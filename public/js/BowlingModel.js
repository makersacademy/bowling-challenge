"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
  this._turn = { frame: 1, roll: 1 }
};

BowlingModel.prototype.play = function(pins) {
  var newScore = this._updateScore(pins);
  this._turn = this._incrementGame(pins);

  if (this._isStrike(pins)) { this.scoreCalculator.addStrike() };

  return { frame: this._turn.frame,
            roll: this._turn.roll,
            total: newScore.total,
            scoresArray: newScore.scoresArray }
};

BowlingModel.prototype._updateScore = function(pins) {
  var scoresArray = this.scoreCalculator.updateArray(pins, this._turn.frame);
  var total = this.scoreCalculator.calculateTotal();
  return { total: total, scoresArray: scoresArray };
}

BowlingModel.prototype._incrementGame = function(pins) {
  if (this._isStrike(pins)) {
    return this.turnIncrementer.incrementFrame()
  } else { return this.turnIncrementer.incrementTurn() };
};

BowlingModel.prototype._isStrike = function(pins) {
  return pins === 10
};
