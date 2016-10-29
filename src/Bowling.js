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
  if (this._turnThrows === 2) {
    this.resetPins();
  }
};

Bowling.prototype.calculateTurn = function () {
  return this._turn.reduce(function(a,b){return a + b},0)
};

Bowling.prototype.resetPins = function () {
  this._turnLog.push(this._turn);
  this._turn = [];
};
