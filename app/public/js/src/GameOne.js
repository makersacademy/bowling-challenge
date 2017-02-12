function Game () {
  this._frame  = new Frame();
  this._frames = [];
  this._TOTAL_FRAMES = 10;
}

Game.prototype.getFrame = function() {
  return this._frame;
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getLength = function() {
  return this.getFrames().length;
}

Game.prototype.lastFrame = function() {
  return this.getFrames().slice(-1)[0]
};

Game.prototype.currentFrame = function() {
  return this._frames.length;
};
