function Game() {
  this._frames = [];
}

//getter functions

Game.prototype.frames = function() {
  return this._frames;
};
