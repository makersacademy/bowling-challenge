function BowlingGame() {
this.rolls = [];
}

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  return 0;
};
