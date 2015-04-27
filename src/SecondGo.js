var Game = function(){
  this.score = [];
};

Game.prototype.frameOne = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameOneScore = function () {
  if (this.score[0] + this.score[1] < 10) {
    return this.score[0] + this.score[1]
  } else if (this.score[0] < 10 && this.score[0] + this.score[1] === 10){
    return this.score[0] + this.score[1] + this.score[2];
  } else if (this.score[0] === 10 ) {
    return this.score[0] + this.score[1] + this.score[2] + this.score[3];
  }
};

Game.prototype.frameTwo = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameThree = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameFour = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameFive = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameSix = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameSeven = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameEight = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameNine = function (x, y) {
  this.score.push(x);
  this.score.push(y);
};

Game.prototype.frameTen = function (x, y, z) {
  this.score.push(x);
  this.score.push(y);
  this.score.push(z);
};
