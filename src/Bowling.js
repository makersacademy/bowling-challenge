'use strict';

function Player() {
  this.score = 0;
  this.frames = 10;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.roll3Score = 0;
  this.frameScore = 0;
}

Player.prototype.bowl = function (number) {
  this.number = number;
  this.roll1(this.number);
  if (this.number === 10) {
    this.frameScore = 10;
    this.frames -= 1;
    this.bowlStrike(number);
  } else
  this.roll2(this.number);
  if (this.frames === 0) {
    this.finish();
  }
};

Player.prototype.roll1 = function (number) {
  this.roll1Score = number;
  this.printRoll1();
};

Player.prototype.roll2 = function (number) {
  this.roll2Score = number;
  this.frameScore  = this.roll2Score + this.roll1Score;
  this.frames -= 1;
  this.printRoll2();
  if (this.frameScore === 10) {
    this.spare(number);
  } else {
    this.score += this.frameScore;
  }
};

Player.prototype.spare = function (number) {
  this.number = number;
  this.frameScore += this.number;
  this.score += this.frameScore;
  this.spareRoll1Score = number;
  this.spareRoll2Score = number;
  this.spareFrameScore = this.spareRoll2Score + this.spareRoll1Score;
  this.score += this.spareFrameScore;
  this.frames -= 1;

};

Player.prototype.bowlStrike = function (number) {
  this.number = number;
  this.frameScore += number * 2;
  this.score += this.frameScore;
  this.strikeRoll1Score = number;
  this.strikeRoll2Score = number;
  this.strikeFrameScore = this.strikeRoll2Score + this.strikeRoll1Score;
  this.score += this.strikeFrameScore;
  this.printStrikeScore();
  this.frames -= 1;
};

Player.prototype.finish = function () {
  this.printFinish();
  return true;
};

Player.prototype.printRoll1 = function () {
  if (this.roll1Score === 0) {
    console.log('Oops, you didn\'t score anything.  Try again on the second roll!');
  }
  else if (this.roll1Score === 1) {
    console.log('You knocked over 1 pin...kind of pathetic but better than 0.');
  }

  else
  console.log('Congrats, you knocked over ' + this.roll1Score + ' pins!');
};

Player.prototype.printRoll2 = function () {
  if (this.roll2Score === 0) {
    console.log('Oops, you didn\'t score anything.  Better luck next frame!');
  }

  else if (this.roll2Score === 1) {
    console.log('You knocked over 1 pin...kind of pathetic but better than 0.');
  }

  else
  console.log('Congrats, you knocked over ' + this.roll2Score + ' pins!');

  console.log('Score on this frame: ' + this.frameScore + '.');
  console.log('Total score: ' + this.score + '.');
  console.log('Frames remaining: ' + this.frames + '.');
};

Player.prototype.printSpareScore = function () {
  console.log('Congrats, you knocked over ' + this.number + ' pins!');
  console.log('Congrats, you knocked over ' + this.spareRoll2Score + ' pins!');
  console.log('Score on this frame: ' + this.spareFrameScore + '.');
  console.log('Total score: ' + this.score + '.');
  console.log('Frames remaining: ' + this.frames + '.');
};

Player.prototype.printStrikeScore = function () {
  console.log('Congrats, you knocked over ' + this.number + ' pins!');
  console.log('Congrats, you knocked over ' + this.number + ' pins!');
  console.log('Score on this frame: ' + this.strikeFrameScore + '.');
  console.log('Total score: ' + this.score + '.');
  console.log('Frames remaining: ' + this.frames + '.');
};

Player.prototype.printFinish = function () {
    console.log("The game is over!");
};
