function Game() {
  this._startingScore = 0;
  this._gutterScore = 0;
  this._maxScore = 300;
}

Game.prototype.startGame = function() {
  return this._startingScore;
};

Game.prototype.gutterBall = function() {
  return this._gutterScore;
};

Game.prototype.maxScore = function() {
  return this._maxScore;
};

// Game.prototype.roll = function() {
//
// }
