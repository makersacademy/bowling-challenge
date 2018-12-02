function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.roll = function(pins) {
  this._frames.push(pins);
};

Game.prototype.score = function() {
  this._score = this._frames.reduce((a, b) => a + b, 0);
  return this._score;
};
