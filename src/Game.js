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
    if (this.isSpare(rollIndex)) {
      total += this.spareScore(rollIndex);
    } else {
      total += this.frameScore(rollIndex);
    };
    rollIndex += 2;
  };
  return total;
};

Game.prototype.isSpare = function(rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10;
};

Game.prototype.spareScore = function(rollIndex) {
  return 10 + this._rolls[rollIndex + 2];
};

Game.prototype.frameScore = function(rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1];
};
