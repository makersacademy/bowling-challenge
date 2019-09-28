var BowlingGame = function(){
  this.score = 0
};

BowlingGame.prototype.roll = function (pins) {
  this.score += pins
};
