function Bowling () {
  this._turn = new Turn();
  this._turnLog = []
  this._turnRemainingPins = 10;
  this._turnThrows = 0;
  this.totalScore = this.calculateTotalScore()
};

Bowling.prototype.recordThrow = function (pins) {
  if (this.isNormalPlayOver() === true){
    this.addToSpecialTurns(pins)
  } else {
    this._turnRemainingPins -= pins;
    this._turnThrows++;
    this._turn.logThrow(pins);
    this.addToSpecialTurns(pins);
    if (this.isTurnEnd() === true) {
      this.resetPins();
    }
  }
};

Bowling.prototype.resetPins = function () {
  this._turnLog.push(this._turn);
  this._turn = new Turn();
  this._turnThrows = 0;
};

Bowling.prototype.isTurnEnd = function () {
  return (this._turnThrows === 2 || this._turn.isAStrike() === true)
};

Bowling.prototype.isNormalPlayOver = function () {
  return this._turnLog.length >= 10
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

Bowling.prototype.addToSpecialTurns = function (pins) {
  for (turn of this._turnLog) {
    if (turn.isTurnOver() === false){
      turn.logThrow(pins);
    }
  }
};

Bowling.prototype.isGameOver = function () {
  var count = 0
  for (turn of this._turnLog) {
    if (turn.isTurnOver() === false){
      count++;
    }
  }
  return (((count === 0) && (this.isNormalPlayOver() === true)) === true)
};

Array.prototype.calculate = function () {
  return this.reduce(function(a,b){return a + b},0)
};
