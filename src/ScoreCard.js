'use strict';

var ScoreCard = function() {
  this.rolls = [];                          //rolls defined as an empty array
};

ScoreCard.prototype.roll = function(pins) {
  this.rolls.push(pins);                     //roll function, push on the array
};

ScoreCard.prototype.score = function() {     //iterate through the rolls array
  var result = 0;
  var rollIndex = 0;
  var scoreCard = this;
                                                 //rollIndex added to iterate through rolls array frame by frame
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (Spare()) {
        result += getSpareScore();
    } else {
        result += getNormalScore();
    }
    rollIndex += 2;                                                //go throught the frames and give the 2 rolls in each frame
  }
  return result;

  function Spare() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex +1] == 10;
  }

  function getSpareScore() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex + 1] + scoreCard.rolls[rollIndex + 2];
  }

  function getNormalScore() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex + 1];
  }
};
