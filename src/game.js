function Game() {
  this._currentScore = 0;
}

Game.prototype.addScore = function addScore( score ) {
  this._currentScore += score;
};

Game.prototype.currentScore = function currentScore() {
  return this._currentScore;
};

Game.prototype.frame = function frame(number) {
  return { score: { score1: 5, score2: undefined, total: undefined } };
};
