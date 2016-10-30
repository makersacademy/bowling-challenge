function Game() {
  this._score = 0;
};

Game.prototype.score = function() {
  return this._score;
};
