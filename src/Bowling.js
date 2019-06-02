function BowlingGame() {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 0;
};

BowlingGame.prototype.rolls = function (roll1, roll2) {
  this.currentFrame = []
  this.currentFrame.push(roll1, roll2)
  this.score = this.score + (this.currentFrame.reduce((a, b) => a + b, 0));
  this.frames.push(this.currentFrame);
  this.frameCounter += 1;
};

BowlingGame.prototype.isStrike = function () {
  return this.currentFrame[0] === 10;
};

BowlingGame.prototype.isSpare = function () {
  return this.currentFrame.reduce((a, b) => a + b, 10);
};

BowlingGame.prototype.isGutter = function () {
  return this.getScore === 0;
};

BowlingGame.prototype.isPerfect = function () {
  return this.getScore === 300;
};

BowlingGame.prototype.endGame = function () {
    return this.frameCounter === 10;
};

BowlingGame.prototype.getScore = function () {
  this.score
};

BowlingGame.prototype.newGame = function () {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 1;
};
