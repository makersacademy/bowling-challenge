"use strict";

var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
};

Game.prototype.score = function() {
  var result = 0;
  var cursor = 0;
  for(var i = 0; i < 10; i++) {
    if (this.rolls[cursor] === 10) {
      result += 10 + this.rolls[cursor+1] + this.rolls[cursor+2];
      cursor += 1;
    } else if (this.rolls[cursor] + this.rolls[cursor+1] === 10) {
      result += 10 + this.rolls[cursor+2];
      cursor += 2;
    } else {
      result += this.rolls[cursor] + this.rolls[cursor+1];
      cursor += 2;
    }
  }
  return result;
};

// function isSpare(cursor) {
//   this.rolls[cursor] + this.rolls[cursor+1] === 10;
// }

// function isStrike(cursor) {
//   this.rolls[cursor] === 10;
// }
