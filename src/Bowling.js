function Bowling () {
  this._turn = new Turn();
  this._turnLog = []
  this._turnRemainingPins = 10;
  this._turnThrows = 0;
};

Bowling.prototype.recordThrow = function (pins) {
  this._turnRemainingPins -= pins;
  this._turnThrows++;
  this._turn.logThrow(pins);

  for (turn of this._turnLog) {
    if (turn.isTurnOver() === false){
      turn.logThrow(pins);
    }
  }
  if (this.isTurnEnd() === true) {
    this.resetPins();
  }
};

Bowling.prototype._isAStrike = function () {
  if (this._turn === undefined ){return false}
  return (this._turn.totalScore() === 10)
};

Bowling.prototype.resetPins = function () {
  this._turnLog.push(this._turn);
  this._turn = new Turn();
  this._turnThrows = 0;
};

Bowling.prototype.isTurnEnd = function () {
  return (this._turnThrows === 2 || this._isAStrike() === true)
};

Bowling.prototype.isGameOver = function () {
  return this._turnLog.length === 10
};

Bowling.prototype.calculateTotalScore = function () {
  var score = 0
  for (turn of this._turnLog){
    for (i=0; i<turn._throws.length; i++){
      score += turn._throws[i]
    }
  }
  return score
}

Bowling.prototype._lastTurn = function () {
  return this._turnLog[this._turnLog.length-1]
};


Array.prototype.calculate = function () {
  return this.reduce(function(a,b){return a + b},0)
};
