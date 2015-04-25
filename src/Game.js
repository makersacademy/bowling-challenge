function Game() {
  this.totalScore = 0;
  this.frame = 0;
  this.ball = 0;
  this.scores = [];
}

Game.prototype.roll = function (pins) {
  this.addToTotal(pins);
  this.saveScore(pins);
  this.nextBall(pins);
  this.setFrame(pins);
};

Game.prototype.addToTotal = function (pins) {
  this.totalScore += pins;
};

Game.prototype.nextBall = function (pins) {
  this.ball += 1;
  this.ball %= 2;
  if (pins === 10) { this.ball = 0; }
};

Game.prototype.setFrame = function (pins) {
  if (this.ball === 0 || pins === 10) { this.frame += 1; }
};

Game.prototype.saveScore = function (pins) {
  this.scores[this.frame] = this.scores[this.frame] || [];
  this.scores[this.frame][this.ball] = pins;
  var previousRollPos = this.flattenScores().length -2
  if (this.flattenScores()[previousRollPos] === 10 || this.flattenScores()[previousRollPos -1] === 10) {
    this.addToTotal(pins);
  }
};

Game.prototype.flattenScores = function () {
  return this.scores.reduce(function (a, b) {
    return a.concat(b);
  });
};