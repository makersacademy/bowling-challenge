function Game(frames = 10) {
  this._frames = [];
  this._maxFrames = frames;
}

Game.prototype.addFrame = function(frame) {
  this._checkIfGameOver();
  this._frames.push(frame);
};

Game.prototype.checkAllScores = function() {
  return this._frames;
};

Game.prototype.checkGameLength = function() {
  return this._maxFrames;
};

Game.prototype._checkIfGameOver = function() {
  if(this.checkAllScores().length === this._maxFrames) {
    throw new Error("Game over!");
  }
};
