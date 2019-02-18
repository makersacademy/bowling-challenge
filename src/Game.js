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
    if (this.isStrike(rollIndex)) {
      total += this.strikeScore(rollIndex);
      rollIndex += 1;
    } else if (this.isSpare(rollIndex)) {
      total += this.spareScore(rollIndex);
      rollIndex += 2;
    } else {
      total += this.frameScore(rollIndex);
      rollIndex += 2;
    };
  };
  return total;
};

Game.prototype.isSpare = function(rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10;
};

Game.prototype.isStrike = function(rollIndex) {
  return this._rolls[rollIndex] === 10;
};

Game.prototype.spareScore = function(rollIndex) {
  return 10 + this._rolls[rollIndex + 2];
};

Game.prototype.strikeScore = function(rollIndex) {
  return 10 + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
}

Game.prototype.frameScore = function(rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1];
};
