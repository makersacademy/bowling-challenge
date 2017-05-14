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
  if (this.roll1Score === 0) {
    console.log('Oops, you didn\'t score anything.  Try again on the second roll!');
  }

  else if (this.roll1Score === 1) {
    console.log('You knocked over 1 pin...kind of pathetic but better than 0.');
  }

  else
  console.log('Congrats, you knocked over ' + this.roll1Score + ' pins!');
};

Player.prototype.roll2 = function (number) {
  this.roll2Score = number;
  this.frameScore  = this.roll2Score + this.roll1Score;
  this.score += this.frameScore;
  if (this.roll2Score === 0) {
    console.log('Oops, you didn\'t score anything.  Better luck next frame!');
  }

  else if (this.roll2Score === 1) {
    console.log('You knocked over 1 pin...kind of pathetic but better than 0.');
  }

  else
  console.log('Congrats, you knocked over ' + this.roll2Score + ' pins!');
  if (this.frameScore === 10) {
    this.spare(number);
  }
};

Player.prototype.spare = function (number) {
  this.number = number;
  this.spareRoll1Score = number * 2;
  console.log('Congrats, you knocked over ' + this.number + ' pins!');
  this.spareRoll2Score = number;
  console.log('Congrats, you knocked over ' + this.spareRoll2Score + ' pins!');
  this.spareFrameScore = this.spareRoll2Score + this.spareRoll1Score;
  this.score += this.spareFrameScore;
  this.frames -= 1;
  console.log('Score on this frame: ' + this.spareFrameScore + '.');
  console.log('Total score: ' + this.score + '.');
  console.log('Frames remaining: ' + this.frames + '.');
};

Player.prototype.finish = function () {
  console.log("The game is over!");
  return true;
};
