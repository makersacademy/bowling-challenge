function Bowling () {
  this._turn = [];
  this._turnLog = []
  this._turnRemainingPins = 10;
  this._turnThrows = 0;
};

Bowling.prototype.recordThrow = function (pins) {
  this._turn.push(pins);
  this._turnRemainingPins -= pins;
  this._turnThrows++;

  if (this.isPreviousTurn10() === true){
    this._turnLog[this._turnLog.length-1].push(pins);
  }

  if (this.isTurnEnd() === true) {
    this.resetPins();
  }
};

Bowling.prototype.calculateTurn = function () {
  return this._turn.reduce(function(a,b){return a + b},0)
};

Bowling.prototype.resetPins = function () {
  this._turnLog.push(this._turn);
  this._turn = [];
  this._turnThrows = 0;
};

Bowling.prototype.isTurnEnd = function () {
  if (this._turnThrows === 2 || this.calculateTurn() === 10){
    return true
  }
  else {
    return false
  }
};

Bowling.prototype.isGameOver = function () {
  return this._turnLog.length === 10
};

Bowling.prototype.calculateTotalScore = function () {
  var turnlog = [].concat.apply([], this._turnLog)
  return turnlog.reduce(function(a,b){return a + b},0)
}

Bowling.prototype._lastTurn = function () {
  return this._turnLog[this._turnLog.length-1]
};

Bowling.prototype.isPreviousTurn10 = function () {
  if (this._lastTurn() === undefined ){return}
  return ((this._lastTurn()).reduce(function(a,b){return a + b},0) === 10)
};
