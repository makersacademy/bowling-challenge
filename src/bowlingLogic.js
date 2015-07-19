var BowlingGame = function(){
this.frames = [
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
  new Frame(),
];
this.gameTotalScore = 0;
};

BowlingGame.prototype.addBonus = function () {
  for (var i = 0; i < this.frames.length; i++) {
    this.frames[i].addRolls();
        if (this.frames[i].isStrike === true) {
          this.frames[i].bonus = this.frames[i + 1].rollScore; this.frames[i].addScore();}
        if (this.frames[i].isSpare === true) {
          this.frames[i].bonus = this.frames[i + 1].roll1; this.frames[i].addScore();}
        else {this.frames[i].addScore();}
      }
};

BowlingGame.prototype.AddFrameScore = function () {
  this.addBonus();
};

BowlingGame.prototype.totalScore = function () {
  for (var i = 0; i < this.frames.length; i++) { this.gameTtotalScore += this.frames[i].totalScore; }
};



var Frame = function(){
this.roll1 = 0;
this.roll2 = 0;
this.rollScore = 0;
this.bonus = 0;
this.totalScore = 0;
};

Frame.prototype.roll = function (pins) {
  if (this.roll1 === 0) {this.roll1 = pins; return this.roll1;}
  if (this.roll1 === (1-10)) {throw new Error('Roll not allowed');}
};

Frame.prototype.rollAgain = function (pins) {
  if (this.roll2 === 0 && this.roll1 != 10) {this.roll2 = pins;  return this.roll2;}
  if (this.roll2 === (1-10)) {throw new Error('Roll not allowed');}
};


Frame.prototype.addRolls = function () {
  this.rollScore = this.roll1 + this.roll2;
  if (this.roll1 === 10 && this.roll2 === 0) { this.isStrike = true;}
  if (this.roll1 + this.roll2 === 10 && this.roll1 != 10) {this.isSpare = true;}
};

Frame.prototype.addScore = function() {
  this.totalScore = this.rollScore + this.bonus;
};
