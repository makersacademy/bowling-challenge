Game = function() {
  this._frames = [];
  this._currentRound = 1;
};

Game.prototype.throwFirstBall = function(pins) {
  this._frames.push([pins])
};

Game.prototype.throwSecondBall = function(pins) {
  this._frames[this._currentRound - 1].push(pins)
  this._currentRound++
};
