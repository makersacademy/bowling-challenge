function Game() {
  this.frames = [];
  this.currentFrame = new Frame();
  this.DEFAULT_PINS = 10;
  this.MAX_FRAMES = 10;
  this.gameScore = 0;
}

Game.prototype.getCurrentFrame = function getCurrentFrame() {
  return this.currentFrame;
};

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.getCurrentScore = function getCurrentScore() {
  return this.gameScore;
};

Game.prototype.resetFrame = function resetFrame() {
  this.addFrame(this.currentFrame);
  this.currentFrame = new Frame();
};

Game.prototype.updateGameScore = function updateGameScore() {
  var frame = this.currentFrame;
  this.gameScore += frame.frameScore();
};

Game.prototype.bowl = function bowl() {
  if (this.currentFrame.isFirstBowl()) {
    this.currentFrame.bowl(this.DEFAULT_PINS);

    if (this.currentFrame.isStrike()) {
      this.currentFrame.incrementBowl();
      this.updateGameScore();
      this.resetFrame();
    }
    this.updateGameScore();
    this.currentFrame.incrementBowl();

  } else if (this.currentFrame.canBowl()) {
    this.currentFrame.bowl(this.currentFrame.pins); // remaining pins

    if (this.currentFrame.isStrike()) {
      this.updateGameScore();
      this.resetFrame();
    } else {
      this.updateGameScore();
      this.currentFrame.incrementBowl();
    }

  } else {
    this.updateGameScore();
    this.resetFrame();
  }
};

Game.prototype.getFrameNumber = function getFrameNumber() {
  return (this.frames.length + 1);
};
