// calculates score of entire game
function Game() {
  this.frames = [];
  this.currentFrameIndex = 0;
  for (i = 0; i <= 9; i++) {
    this.frames.push(new Frame(i));
  }
}

Game.prototype.currentFrame = function() {
  return this.frames[this.currentFrameIndex];
};

Game.prototype.advanceFrame = function() {
  this.currentFrameIndex += 1;
};

Game.prototype.calculateTotalScore = function() {
  var totalScore = 0;
  this.frames.forEach(function(frame) {
    totalScore += frame.calculateScore();
  });
  return totalScore;
};

Game.prototype.currentMove = function(pinsDown) {
  var currentFrame = this.currentFrame();
  currentFrame.roll(pinsDown);
  this.applyBonusRolls(pinsDown);
  if (currentFrame.isFinished()) {
    this.advanceFrame();
  }
};

Game.prototype.applyBonusRolls = function(pinsDown) {
  if (this.currentFrameIndex > 0) {
    var previousFrame = this.frames[this.currentFrameIndex - 1];
    previousFrame.bonusRoll(pinsDown);
  }
  if (this.currentFrameIndex > 1) {
    var frameBeforeLast = this.frames[this.currentFrameIndex - 2];
    frameBeforeLast.bonusRoll(pinsDown);
  }
};
