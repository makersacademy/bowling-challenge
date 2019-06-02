function BowlingGame() {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 1;
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

BowlingGame.prototype.newGame = function () {
  this.score = 0;
  this.frames = [];
  this.currentFrame = [];
  this.frameCounter = 1;

};
