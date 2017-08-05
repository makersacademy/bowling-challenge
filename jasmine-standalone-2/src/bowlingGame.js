var BowlingGame = function() {
  this._possibleScore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

BowlingGame.prototype.roll = function() {
return this._possibleScore[Math.floor(Math.random() * this._possibleScore.length)];
};
