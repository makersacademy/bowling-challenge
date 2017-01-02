'use strict';

var MAXIMUM_SCORE = 10;
var STARTING_SCORE = 0;

function Bowling () {
  this.score = STARTING_SCORE;
  this.frame = 1;
  this.go = 1;
  this.running_total = [];
  this.first_go = 0;
  this.second_go = 0;
  this.unscored_strikes = 0;
  this.unscored_half_strike = false;
}

Bowling.prototype.enterScore = function(number) {
  if (this.go === 1) {
    this.firstGo(number)}
  else {
    this.secondGo(number)
  }
};

Bowling.prototype.firstGo = function(number) {
  if (number === MAXIMUM_SCORE && this.unscored_strikes < 2) {
    this.firstGoStrikeManyStrikes(number);
  }
  else if (number === MAXIMUM_SCORE) {
    this.firstGoStrike(number);
  }
  else {
    this.firstGoNotStrike(number);
    };
}

Bowling.prototype.firstGoStrikeManyStrikes = function(number) {
  if (this.unscored_half_strike === true) {
    this.score += MAXIMUM_SCORE + MAXIMUM_SCORE
  };
  this.frame += 1;
  this.unscored_strikes += 1;
  this.running_total.push("X");
}

Bowling.prototype.firstGoStrike = function(number) {
  this.frame += 1;
  this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + MAXIMUM_SCORE);
}

Bowling.prototype.firstGoNotStrike = function(number) {
  if (this.unscored_strikes > 1) {
    this.firstGoNotStrikeUnscoredStrikes(number);
  }
  else if (this.unscored_strikes === 1) {
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
  this.first_go = number;
  this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + number);
  this.unscored_strikes -= 1;
}

Bowling.prototype.firstGoNotStrikeUnscoredStrike = function(number) {
  this.go += 1;
  this.first_go = number;
  this.running_total.push(number);
}

Bowling.prototype.firstGoNotStrikeUnscoredHalfStrike = function(number) {
  this.go += 1;
  this.first_go = number;
  this.score += MAXIMUM_SCORE + number;
  this.unscored_half_strike = false;
}

Bowling.prototype.firstGoNotStrikeNormal = function(number) {
  this.go += 1;
  this.running_total.push(number);
  this.first_go = number;
}

Bowling.prototype.secondGo = function(number) {
  if (this.unscored_strikes > 0) {
    this.secondGoUnscoredStrikes(number);
  }
  else if (this.first_go + number === 10) {
    this.secondGoHalfStrike(number)
  }
  else {
    this.secondGoNormal(number)
  }
}

Bowling.prototype.secondGoUnscoredStrikes = function(number) {
  this.go = 1;
  this.second_go = number;
  this.unscored_strikes = 0;
  if (this.first_go + this.second_go === 10) {
  this.score += MAXIMUM_SCORE + this.first_go + this.second_go ;
  this.unscored_half_strike = true;
  }
  else {
    this.score += (MAXIMUM_SCORE + 2 * (this.first_go + this.second_go));
  }
}

Bowling.prototype.secondGoHalfStrike = function(number) {
  this.go = 1;
  this.second_go = number;
  this.unscored_half_strike = true;
}

Bowling.prototype.secondGoNormal = function(number) {
  this.go = 1;
  this.second_go = number;
  this.frame += 1;
  this.score += this.first_go + number;
  this.running_total.push(number);
}

Bowling.prototype.showScore = function() {
  return this.score;
};
