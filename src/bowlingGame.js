function BowlingGame() {
  this.score = 0;
}

BowlingGame.prototype.begin = function ( score = new Score() ) {
  this.score = score;
  for (let i = 0; i < 2; i += 1) {
    this.score.newFrame();
  }
};

BowlingGame.prototype.roll = function (pins) {
  this.score.record(pins);
  return pins;
};

BowlingGame.prototype.getScore = function () {
  return this.score.total();
};
