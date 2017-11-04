
function Game() {
  this._frames = [];
  this._frame = new Frame();
}

//getter functions

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.frame = function() {
  return this._frame;
};

//functions to aid with scoring

Game.prototype.FrameNo = function() {
  return this.frames.length + 1;
};

Game.prototype.isFirstFrame = function() {
  if (this.frames.length == 0) return true;
};

Game.prototype.FrameIndex = function() {
  return this.frames.length;
};
