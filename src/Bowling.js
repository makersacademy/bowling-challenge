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
};

Player.prototype.roll2 = function (number) {
  this.roll2Score = number;
  this.frameScore  = this.roll2Score + this.roll1Score;
  this.score += this.frameScore;
  if (this.frameScore === 10) {
    this.spare();
  }
};

Player.prototype.spare = function (number) {
  this.score = 12;
};

Player.prototype.finish = function () {
  return true;
};
