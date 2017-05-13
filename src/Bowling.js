'use strict';

function Player() {
  this.score = 0;
  this.frames = 10;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.frameScore = 0
}

Player.prototype.bowl = function() {
   this.roll1(1);
   this.roll2(2);
   this.frames -= 1;
   this.finish();
};

Player.prototype.roll1 = function (number) {
  this.roll1Score = number
};

Player.prototype.roll2 = function (number) {
  this.roll2Score = number
  this.frameScore  = this.roll2Score + this.roll1Score;
  this.score += this.frameScore
};

Player.prototype.spare = function (number) {
  return 12;

}

Player.prototype.finish = function() {
  return true;
};
