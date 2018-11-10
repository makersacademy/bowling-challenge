function Game() {
  this.frames = [];
  this.currentFrameIndex = 0;
}

Game.prototype.setup = function() {
  for (var i = 0; i < 14; i++) {
    this.frames.push(new Frame(this, i));
  }
};

Game.prototype.roll = function(roll) {
  this.updateCurrentFrame();
  this.currentFrame.addRoll(roll);
  this.currentFrame.updateRollIndex();
  if (this.currentFrame.isStrike() || this.currentFrame.isDone()) {
    this.updateCurrentFrameIndex();
  }
  return this.calculateScore();
};

Game.prototype.calculateScore = function() {
  var total = 0;
  for (var i = 0; i < 10; i++) {
    total += this.frames[i].calculateFrameScore();
  }
  return total;
};

Game.prototype.updateCurrentFrame = function() {
  this.currentFrame = this.frames[this.currentFrameIndex];
};

Game.prototype.updateCurrentFrameIndex = function() {
  this.currentFrameIndex += 1;
};
