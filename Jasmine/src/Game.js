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
  var frame = this.currentFrame();
  frame.roll(pinsDown);
  if (frame.isFinished()) {
    this.advanceFrame();
  }
};
