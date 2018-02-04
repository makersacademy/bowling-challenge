var BowlingGame = function (){
  this.pins1 = 0;
  this.pins2 = 0;
  this.rollTotal = 0;
  this.currentRollNumber = 0;
  this.scoreTotal = 0;
  this.finalScore = 0;
  this.scoreArray = [];
  this.scoreArrayIndexSpare = [];
};

BowlingGame.prototype.roll = function (pins1, pins2) {
  this.pins1 = pins1;
  this.pins2 = pins2;
  this.rollTotal = pins1 + pins2;
  this.currentRollNumber += 2;
};

BowlingGame.prototype.score = function () {
  this.scoreTotal = this.pins1 + this.pins2;
  this.scoreArray.push([this.pins1, this.pins2]);
};

BowlingGame.prototype.finalScore = function () {
  if (this.scoreArrayIndexSpare.length > 0) {
    this.scoreArrayIndexSpare.forEach(function (num) {
        this.finalScore = this.scoreTotal + this.scoreArray[num];
    });
  }
  else {
    this.finalScore = this.scoreTotal;
  }
};

BowlingGame.prototype._isSpare = function () {
  if (this.rollTotal === 10) {
    this.scoreArrayIndexSpare.push(this.currentRollNumber)
  };
};

BowlingGame.prototype._isStrike = function () {

};
