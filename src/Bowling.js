function Scorecard() {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 0;
};

Scorecard.prototype.rolls = function (roll1, roll2) {
  this.currentFrame = []
  this.currentFrame.push(roll1, roll2)
  this.score = this.score + (this.currentFrame.reduce((a, b) => a + b, 0));
  this.frames.push(this.currentFrame);
  this.frameCounter += 1;
};

Scorecard.prototype.isStrike = function () {
  return this.currentFrame[0] === 10;
};

Scorecard.prototype.isSpare = function () {
  return this.currentFrame.reduce((a, b) => a + b, 10);
};

Scorecard.prototype.isGutter = function () {
  return this.getScore === 0;
};

Scorecard.prototype.isPerfect = function () {
  return this.getScore === 300;
};

Scorecard.prototype.endGame = function () {
    return this.frameCounter === 10;
};

Scorecard.prototype.getScore = function () {
  this.score
};

Scorecard.prototype.newGame = function () {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 1;
};
