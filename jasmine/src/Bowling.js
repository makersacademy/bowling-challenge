'use strict'

var Bowling = function() {
  this.rolls = [];
  this.current = 0;
};

Bowling.prototype = {
  roll: function(pins) {
    this.rolls[this.current++] = pins;
  },
// Create 2 functions separetly for strikescore and spare for refactoring
// Create a function for 10th frame -- when tenth frame then gameover
  score: function() {
    var points = 0;

    for (var i = 0; i < this.rolls.length; i++) {
      if (this.isStrike(i)) {
        points += 10 + this.rolls[i + 1] + this.rolls[i + 2];
      } else if (this.isSpare(i)) {
        points += 10 + this.rolls[i + 2];
        i++;
      } else {
        points += this.rolls[i];
      }
    }
    return points;
  },

  isSpare: function(roll) {
    return this.rolls[roll] + this.rolls[roll + 1] === 10;
  },

  isStrike: function(roll) {
    return this.rolls[roll] === 10;
  },

}
