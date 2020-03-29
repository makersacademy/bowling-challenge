var BowlingGame = function() {
  this._tempScore = 0;
};


BowlingGame.prototype.play = function(pins) {
  this._tempScore += pins;
  //this is equivalent of this._tempScore = this._tempScore + pins;
};

BowlingGame.prototype.score = function() {
  return this._tempScore;
};
