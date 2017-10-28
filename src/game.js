function Game() {
  this._score = 0
  this._rolls = []
};

Game.prototype.roll = function (pins) {
  this._rolls.push(pins)
};

Game.prototype.returnScore = function () {
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.isStrike(rollIndex)) {
      this._score += this.strikeScore(rollIndex);
      rollIndex ++;
    }
    else if (this.isSpare(rollIndex)) {
      this._score += this.spareScore(rollIndex);
      rollIndex += 2;
    } 
    else {
      this._score += this.normalScore(rollIndex);
      rollIndex += 2;
    }
  }
  return this._score
};

Game.prototype.isSpare = function (rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10
};

Game.prototype.isStrike = function (rollIndex) {
  return this._rolls[rollIndex] === 10
};

Game.prototype.spareScore = function (rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2]
} 

Game.prototype.strikeScore = function (rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2]
}

Game.prototype.normalScore = function (rollIndex) {
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1]
}