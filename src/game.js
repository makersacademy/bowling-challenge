function Game() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  if (this._isGameOver()) {
    return 'This game is over'
  }
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
  this._frameScore();
};

Game.prototype._frameScore = function() {
  this._scores.push((frame._firstRoll) + (frame._secondRoll))
};

Game.prototype._addTotalScore = function() {
  for (var i = 0; i < this._scores.length; i++) {
    this._totalScore += this._scores[i];
  }
};

Game.prototype._isGameOver = function() {
  return this._frames.length >= 10;
};

Game.prototype._resetGame = function() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
};

Game.prototype._endGame = function() {
  this._frameScore();
  this._addTotalScore();
  console.log("Total score is " + this._totalScore);
  this._resetGame();
};
