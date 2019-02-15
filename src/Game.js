function Game() {
  this._rolls = [];
};

Game.prototype.roll = function (pinsDown) {
  this._rolls.push(pinsDown);
};

Game.prototype.score = function () {
  var total = 0;
  var rollIndex = 0;
  for (i = 0; i < 10; i++) {
    if (this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10) {
      total += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2]
    } else {
      total += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
    };
    rollIndex += 2;
  };
  return total;
};
