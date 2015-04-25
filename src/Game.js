function Game() {
  this.totalScore = 0;
  this.frame = 0;
  this.ball = 0;
  this.scores = [];
  this.frameLimit = 9;
  this.totalPins = 10;
}

Game.prototype.roll = function (pins) {
  if (this.frame > this.frameLimit) { return this.lastRound(pins); }
  this.calculateScores(pins);
  this.nextBall(pins);
  this.setFrame(pins);
  return this.totalScore;
};

Game.prototype.addToTotal = function (pins) {
  this.totalScore += pins;
};

Game.prototype.calculateScores = function (pins) {
  this.addToTotal(pins);
  this.saveScore(pins);
};

Game.prototype.calculateScores = function (pins) {
  this.addToTotal(pins);
  this.saveScore(pins);
};

Game.prototype.nextBall = function (pins) {
  this.ball += 1;
  this.ball %= 2;
  if (pins === this.totalPins) { this.ball = 0; }
};

Game.prototype.setFrame = function (pins) {
  if (this.ball === 0 || pins === this.totalPins) { this.nextFrame(); }
};

Game.prototype.nextFrame = function () {
  this.frame += 1;
};

Game.prototype.saveScore = function (pins) {
  if (this.previousFramesStrike()) {
    this.addToTotal(pins);
  } else if (this.previousBallSpare()) {
    this.addToTotal(pins);
  }
  this.scores[this.frame] = this.scores[this.frame] || [];
  this.scores[this.frame][this.ball] = pins;
};

Game.prototype.previousBallSpare = function () {
  return this.ball === 0 && this.sumFrame(this.scores[this.scores.length - 1]) === this.totalPins;
};

Game.prototype.previousFramesStrike = function () {
  var previousRollPos = this.flattenedScores().length - 1;
  return this.flattenedScores()[previousRollPos] === this.totalPins || this.flattenedScores()[previousRollPos - 1] === this.totalPins;
};

Game.prototype.sumFrame = function (frame) {
  if (frame) {
    return frame[0] + frame[1];
  }
};

Game.prototype.flattenedScores = function () {
  return this.scores.reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

Game.prototype.lastRound = function (pins) {
  if (this.previousFramesStrike() && this.frame < (this.frameLimit + 2)) {
    this.nextFrame();
    return this.addToTotal(pins);
  }
  return 'Game Over';
};