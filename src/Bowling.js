function BowlingGame() {
  this._score = 0;
  this._frames = 10;
};

BowlingGame.prototype.rolls = function (roll1, roll2) {
  this._score = (roll1 + roll2)
};
