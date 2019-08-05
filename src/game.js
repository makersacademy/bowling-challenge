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
  nextFrame = new Frame((this._currentFrame + 1))
};

Game.prototype.totalScore = function() {
  return this._totalScore;
};
