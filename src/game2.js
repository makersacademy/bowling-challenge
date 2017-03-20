function Game() {
  this._frames = [];
  this._MAXFRAMES = 10;
}

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.addFrame = function(frame) {
  this._frames.push(frame);
}
