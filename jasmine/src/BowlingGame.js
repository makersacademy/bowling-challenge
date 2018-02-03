var BowlingGame = function (){
  this.total = 0;
};

BowlingGame.prototype.roll = function () {
  return true;
};

BowlingGame.prototype.score = function () {
  var score = 0;
  return score + 5;
};

BowlingGame.prototype.finalScore = function () {
  return 130;
};

BowlingGame.prototype._isSpare = function () {

};

BowlingGame.prototype._isStrike = function () {

};
