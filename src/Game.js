function Game() {
  this._frames = [];
}

Game.prototype.showFrames = function () {
  return this._frames;
};

Game.prototype.roll = function(frame) {
  this._frames.push(frame);
};

Game.prototype.finalScore = function() {
  return this._frames.reduce(function(a, b) { return a + b; }, 0);
};
