function Bowling () {
  this._turn = [];
  this._turnLog = []
  this._turnRemainingPins = 10;
  this._turnThrows = 0;
  this.totalScore = 0;
};

Bowling.prototype.recordThrow = function (pins) {
  this._turn.push(pins);
  this._turnRemainingPins -= pins;
  this._turnThrows++;
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
  if (this._turnLog.length === 10) {
    return true
  }
  else {
    return false
  }
};

// Bowling.prototype.calculateTotalScore = function () {
//   return this._turnLog.reduce(function(a,b){return a.concat(b);},[]).calculateTurn();
// }
