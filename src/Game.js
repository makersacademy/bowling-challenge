function Game() {
  this._score = 0;
}

// PUBLIC

Game.prototype.getScore = function() {
  return this._score;
};

Game.prototype.roll = function(pins) {
  this._setScore(pins);
};

// PRIVATE

Game.prototype._setScore = function(points) {
  this._score += points;
};
