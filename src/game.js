function Game() {
  this._totalScore = 0;
  this._frames = [];
  this._gameOver = false;
  this._currentFrame = 1;
};

Game.prototype.updateScore = function(frame) {
  var frameScore = frame.score();
  this._totalScore += frameScore;
};

Game.prototype.add = function(frame) {
  this._frames.push(frame);
  this._totalScore += frame.frameScore();
  this._currentFrame += 1;
  this.updateStatus();
};

Game.prototype.totalScore = function() {
  return this._totalScore;
};

Game.prototype.updateStatus = function() {
  if (this._frames.length === 10) {
    this._gameOver = true;
  }
};
