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
