
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
