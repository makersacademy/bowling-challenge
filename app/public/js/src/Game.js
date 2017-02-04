function Game() {
  this.score  = 0;
  this.frames = 10;
}

Game.prototype.rollBall = function(pins) {
  this._countScore(pins);
};

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype._countScore = function(points) {
  this.score += points;
};
