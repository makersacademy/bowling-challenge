function Frames() {
  this.pins = 10;
  this.rolls = [];
};

Frames.prototype.logRollResult = function (pinsKnocked) {
  this.rolls.push(pinsKnocked);
};

Frames.prototype.total = function () {
  var runningTotal = 0;
  for (var i = 0; i < this.rolls.length; i++) {
    runningTotal += this.rolls[i];
  }
  return runningTotal;
};