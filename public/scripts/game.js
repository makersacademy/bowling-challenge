function BowlingGame() {
  this.TOTAL_TURNS = 10;
  this._turnsPlayed = [];
  this._currentTurn
  this._overallScore = 0;
};

BowlingGame.prototype.newRoll = function(pins) {
  if (this._currentTurn.status === "complete") {
    saveTurn();
      newTurn(pins);
  } else {
    this._currentTurn.play(pins);
  };
};

BowlingGame.prototype.newTurn(pins) = function () {
  this._currentTurn = new Turn(pins)
};

BowlingGame.prototype.saveTurn = function () {
  this._TurnsPlayed.push(this._currentTurn);
  updateScore();
};

BowlingGame.prototype.updateScore = function () {
 // no idea
};
