'use strict';

var ScoreCard = function() {
  this.rolls = [];                          //rolls defined as an empty array
};

ScoreCard.prototype.roll = function(pins) {
  this.rolls.push(pins);                     //roll function, push on the array
};

ScoreCard.prototype.score = function() {     //iterate through the rolls array
  var result = 0;
  var rollIndex = 0;                                               //rollIndex added to iterate through rolls array frame by frame
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];  //a normal roll plus another bounus roll added for a spare
    } else {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
    rollIndex += 2;                                                //go throught the frames and give the 2 rolls in each frame
  }
  return result;
};
