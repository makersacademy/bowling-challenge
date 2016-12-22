'use strict';

var MAXIMUM_SCORE = 10;

function Bowling () {
  this.score = 0;
  this.frame = 1;
  this.go = 1;
  this.running_total = [];
  this.last_strike = false;
}

Bowling.prototype.enter_score = function(number) {
  if (this.go === 1) {
    if (number === MAXIMUM_SCORE) {
      this.frame += 1;
      this.last_strike = true;
        }
    else {
    this.go += 1;
    this.score += number;
    this.running_total.push(number);
  }}
  else {
    this.go = 1;
    this.frame += 1;
    this.score += number;
    this.running_total.push(number);
  }
}
