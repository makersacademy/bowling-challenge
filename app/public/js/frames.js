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
this.totalScore = 0;
};

BowlingGame.prototype.addScore = function () {

};


var Frame = function(){
this.roll1 = 0;
this.roll2 = 0;
this.rollScore = 0;
this.bonus = 0;
this.totalScore = 0;
};

Frame.prototype.roll = function (pins) {
  if (this.roll1 === 0) {this.roll1 = pins;}
  return this.roll1
  if (this.roll1 === (1-10)) {throw new Error('Roll not allowed');}
};

Frame.prototype.rollAgain = function (pins) {
  if (this.roll2 === 0 && this.roll1 != 10) {this.roll2 = pins;}
  return this.roll2
  if (this.roll2 === (1-10)) {throw new Error('Roll not allowed');}
};

Frame.prototype.strike = function () {
  if (this.roll1 === 10) {this.bonus = ;}
};

Frame.prototype.spare = function () {
  if (this.roll1 + this.roll2 === 10) {this.bonus = ;}
};

Frame.prototype.addScore = function() {
  this.rollScore = this.roll1 + this.roll2;
  this.totalScore = this.rollScore + this.bonus;
};
