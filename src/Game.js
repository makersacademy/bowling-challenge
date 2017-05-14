Game = function() {
  this._frames = [];
};

Game.prototype.throwFirstBall = function(pins) {
  this._frames.push([pins])
};

Game.prototype.throwSecondBall = function(pins) {
  this._frames[0].push(pins)
};
