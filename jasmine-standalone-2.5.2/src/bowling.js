'use strict';

var MAXIMUM_SCORE = 10;

function Bowling () {
  this.score = 0;
  this.frame = 1;
  this.go = 1;
  this.running_total = [];
  this.last_strike = false;
  this.first_go = 0;
  this.second_go = 0;
  this.strikes = 0;
}

Bowling.prototype.enter_score = function(number) {
  if (this.go === 1) {
    if (number === MAXIMUM_SCORE) {
      this.frame += 1;
      this.last_strike = true;
      this.strikes += 1;
        }
    else {
      if (this.last_strike === true) {
        this.go += 1;
        this.first_go = number;
      }
      else {
      this.go += 1;
      this.score += number;
      this.running_total.push(number);
  }}}
  else {
    if (this.last_strike === true) {
      this.go = 1;
      this.second_go = number;
      this.score += (10 + 2 * (this.first_go + this.second_go));
      this.running_total.push("X", this.first_go,number)
    }
    else {
    this.go = 1;
    this.second_go = number;
    this.frame += 1;
    this.score += number;
    this.running_total.push(number);
  }}
}
