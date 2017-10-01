'use strict';

var ScoreCard = function() {
  this.rolls = [];                          //rolls defined as an empty array
};

ScoreCard.prototype.roll = function(pins) {
  this.rolls.push(pins);                     //roll function, push on the array
};

ScoreCard.prototype.score = function() {     //iterate through the rolls array
  var result = 0;
  for (var i = 0; i < 20; i++) {
    result += this.rolls[i];
  }
  return result;
};
