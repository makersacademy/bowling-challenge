'use strict';

var MAXIMUM_SCORE = 10;
var STARTING_SCORE = 0;

function Bowling () {
  this.score = STARTING_SCORE;
  this.frame = 1;
  this.go = 1;
  this.runningTotal = [];
  this.firstBall = 0;
  this.secondBall = 0;
  this.unscoredStrikes = 0;
  this.unscoredHalfStrike = false;
  this.gameOver = false;
}

Bowling.prototype.enterScore = function(number) {
  if (this.go === 1 && this.frame < 10) {
    this.firstGo(number)}
  else if (this.go === 2 && this.frame < 10) {
    this.secondGo(number)
  }
  else {
    this.lastFrame(number)
  }
};

Bowling.prototype.lastFrame = function(number) {
  if (this.go === 1 && number < MAXIMUM_SCORE) {
    this.firstGo(number);
  }
  else if (this.go === 1 && number === MAXIMUM_SCORE) {
    this.firstGo(number);
    this.frame -= 1; }
  else {
    this.secondGo(number);
    this.frame -= 1;
    this.gameOver = true;
  }

}

Bowling.prototype.firstGo = function(number) {
  if (number === MAXIMUM_SCORE && this.unscoredStrikes < 2) {
    this.firstGoStrikeManyStrikes(number)
  }
  else if (number === MAXIMUM_SCORE) {
    this.firstGoStrike(number)
  }
  else {
    this.firstGoNotStrike(number)
    }
}

Bowling.prototype.firstGoStrikeManyStrikes = function(number) {
  if (this.unscored_half_strike === true) {
    this.score += MAXIMUM_SCORE + MAXIMUM_SCORE
  }
  this.frame += 1;
  this.unscoredStrikes += 1;
  this.runningTotal.push("X");
}

Bowling.prototype.firstGoStrike = function(number) {
  this.frame += 1;
  this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + MAXIMUM_SCORE);
}

Bowling.prototype.firstGoNotStrike = function(number) {
  if (this.unscoredStrikes > 1) {
    this.firstGoNotStrikeUnscoredStrikes(number);
  }
  else if (this.unscoredStrikes === 1) {
    this.firstGoNotStrikeUnscoredStrike(number);
  }
  else if (this.unscored_half_strike === true) {
    this.firstGoNotStrikeUnscoredHalfStrike(number)
  }
  else {
  this.firstGoNotStrikeNormal(number);
  }
}

Bowling.prototype.firstGoNotStrikeUnscoredStrikes = function(number) {
  this.go += 1;
  this.firstBall = number;
  this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + number);
  this.unscoredStrikes -= 1;
}

Bowling.prototype.firstGoNotStrikeUnscoredStrike = function(number) {
  this.go += 1;
  this.firstBall = number;
  this.runningTotal.push(number);
}

Bowling.prototype.firstGoNotStrikeUnscoredHalfStrike = function(number) {
  this.go += 1;
  this.firstBall = number;
  this.score += MAXIMUM_SCORE + number;
  this.unscored_half_strike = false;
}

Bowling.prototype.firstGoNotStrikeNormal = function(number) {
  this.go += 1;
  this.runningTotal.push(number);
  this.firstBall = number;
}

Bowling.prototype.secondGo = function(number) {
  if (this.unscoredStrikes > 0) {
    this.secondGoUnscoredStrikes(number);
  }
  else if (this.firstBall + number === 10) {
    this.secondGoHalfStrike(number)
  }
  else {
    this.secondGoNormal(number)
  }
}

Bowling.prototype.secondGoUnscoredStrikes = function(number) {
  this.go = 1;
  this.frame += 1;
  this.secondBall = number;
  this.unscoredStrikes = 0;
  if (this.firstBall + this.secondBall === 10) {
  this.score += MAXIMUM_SCORE + this.firstBall + this.secondBall ;
  this.unscored_half_strike = true;
  }
  else {
    this.score += (MAXIMUM_SCORE + 2 * (this.firstBall + this.secondBall));
  }
}

Bowling.prototype.secondGoHalfStrike = function(number) {
  this.go = 1;
  this.frame += 1;
  this.secondBall = number;
  this.unscored_half_strike = true;
}

Bowling.prototype.secondGoNormal = function(number) {
  this.go = 1;
  this.secondBall = number;
  this.frame += 1;
  this.score += this.firstBall + number;
  this.runningTotal.push(number);
}

Bowling.prototype.showScore = function() {
  return this.score;
}

Bowling.prototype.showFrame = function() {
  return this.frame;
}
