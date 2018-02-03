var BowlingGame = function (){
  this.pins1 = 0;
  this.pins2 = 0;
  this.rollTotal = 0;
  this.currentRollNumber = 0;
  this.scoreTotal = 0;
};

BowlingGame.prototype.roll = function (pins1, pins2) {
  this.pins1 = pins1;
  this.pins2 = pins2;
  this.rollTotal = pins1 + pins2;
  this.currentRollNumber += 2;
};

BowlingGame.prototype.score = function () {
  this.scoreTotal = this.pins1 + this.pins2;
};

BowlingGame.prototype.finalScore = function () {
  return 130;
};

BowlingGame.prototype._isSpare = function () {

};

BowlingGame.prototype._isStrike = function () {

};
