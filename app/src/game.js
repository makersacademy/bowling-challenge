function Game() {
  this._frame = 1;
}

Game.prototype.frame = function() {
  return (this._frame);
};
