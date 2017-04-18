function Game() {
  this.frames = [];
  this._currentFrame = new Frame();
  this.DEFAULT_PINS = 10;
  this.MAX_FRAMES = 10;
  this.gameScore = 0;
}

Game.prototype.getCurrentFrame = function getCurrentFrame() {
  return this._currentFrame;
};

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.getCurrentScore = function getCurrentScore() {
  return this.gameScore;
};

Game.prototype.resetFrame = function resetFrame() {
  this.addFrame(this._currentFrame);
  this._currentFrame = new Frame();
};

Game.prototype.updateScore = function updateScore() {
  var frame = this._currentFrame;
  this.gameScore += frame.frameScore();
};

Game.prototype.bowl = function bowl() {
  if (this._currentFrame.isFirstBowl()) {
    this._currentFrame.bowl(this.DEFAULT_PINS);
    this._currentFrame.incrementBowl();
  } else if (this._currentFrame.canBowl()) {
    this._currentFrame.bowl(this._currentFrame.pins); // remaining pins
    this._currentFrame.incrementBowl();
  } else {
    this.updateScore();
    this.resetFrame();
    throw new Error('Already bowled, next frame');
  }
};
