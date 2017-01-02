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

Bowling.prototype.enter_score = function(number) {
  if (this.go === 1) {
    this.firstGo(number)}
  else {
    this.secondGo(number)}
};

Bowling.prototype.firstGo = function(number) {
  if (number === MAXIMUM_SCORE && this.unscored_strikes < 2) {
    if (this.unscored_half_strike === true) {
      this.score += MAXIMUM_SCORE + MAXIMUM_SCORE
    }
    this.frame += 1;
    this.unscored_strikes += 1;
    this.running_total.push("X");
  }
  else if (number === MAXIMUM_SCORE) {
    this.frame += 1;
    this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + MAXIMUM_SCORE);
  }
  else {
    if (this.unscored_strikes > 1) {
      this.go += 1;
      this.first_go = number;
      this.score += (MAXIMUM_SCORE + MAXIMUM_SCORE + number);
      this.unscored_strikes -= 1;
    }
    else if (this.unscored_strikes === 1) {
      this.go += 1;
      this.first_go = number;
      this.running_total.push(number);
    }
    else if (this.unscored_half_strike === true) {
      this.go += 1;
      this.first_go = number;
      this.score += MAXIMUM_SCORE + number;
      this.unscored_half_strike = false;
    }
    else {
    this.go += 1;
    this.running_total.push(number);
    this.first_go = number;
}};
}

Bowling.prototype.secondGo = function(number) {
  if (this.unscored_strikes > 0) {
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
  else if (this.first_go + number === 10) {
    this.go = 1;
    this.second_go = number;
    this.unscored_half_strike = true;
  }
  else {
  this.go = 1;
  this.second_go = number;
  this.frame += 1;
  this.score += this.first_go + number;
  this.running_total.push(number);
}}
}

Bowling.prototype.showScore = function() {
  return this.score;
};
