'use strict';

function Player() {
  this.score = 0;
  this.frames = 10;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.frameScore = 0;
}

Player.prototype.bowl = function (number) {
  this.number = number;
  this.roll1(this.number);
  this.roll2(this.number);
  this.frames -= 1;
  if (this.frames === 0) {
    this.finish();
  }
};

Player.prototype.roll1 = function (number) {
  this.roll1Score = number;
  console.log('Congrats, you knocked over ' + this.roll1Score + ' pins!');
};

Player.prototype.roll2 = function (number) {
  this.roll2Score = number;
  this.frameScore  = this.roll2Score + this.roll1Score;
  this.score += this.frameScore;
  console.log('Congrats, you knocked over ' + this.roll2Score + ' pins!');
  if (this.frameScore === 10) {
    this.spare(number);
  }
};

Player.prototype.spare = function (number) {
  this.number = number;
  this.spareRoll1Score = number * 2;
  console.log('Congrats, you knocked over ' + this.spareRoll1Score + ' pins!');
  this.spareRoll2Score = number;
  console.log('Congrats, you knocked over ' + this.spareRoll1Score + ' pins!');
  this.spareFrameScore = this.spareRoll2Score + this.spareRoll1Score;
  this.score += this.spareFrameScore;
  this.frames -= 1;
};

Player.prototype.finish = function () {
  console.log("The game is over!");
  return true;
};
