function BowlingGame() {
  this._score = 0;
  this._currentFrame = 1;
  this._maxFrames = 10;
};

BowlingGame.prototype.rolls = function (roll1, roll2) {
  if (roll1 === 10) {
    return 'Strike'
  }
  if (roll1 + roll2 === 10) {
    return 'Spare'
  }
  this._score = (roll1 + roll2)
  this._currentFrame += 1
};
