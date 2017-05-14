Game = function() {
  this._frames = [];
};

Game.prototype.throwFirstBall = function(pins) {
  this._frames.push([pins])
};
