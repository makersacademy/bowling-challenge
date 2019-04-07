function Game() {
  this.currentScore = 0;
  this.frames = [new Frame];
  this.isInPlay = true;
}

Game.prototype.roll = function (pins) {
  this.manageFrame();
  this.currentFrame().addRoll(pins);
  if(this.isGameOver) {
    this.isInPlay = false;
  }
};

Game.prototype.score = function () {
  return this.currentScore;
};

Game.prototype.manageFrame = function() {
  if(this.isFrameOver()) {
    this.frames.push(new Frame)
  };
};

Game.prototype.isFrameOver = function() {
  return this.currentFrame().rolls().length === 2;
};

Game.prototype.isGameOver = function() {
  return this.frames.length === 10 && this.isFrameOver();
};

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1];
};
