'use strict';

var ScoreCard = function() {
  this.rolls = [];                                //rolls defined as an empty array
  this.frames = [];
  this.currentRoll;
};

ScoreCard.prototype.roll = function(pins) {
  if (this.invalidNumber(pins)) {
    throw new Error("ERROR! Expected a number between 0 and 10");
  }
  this.rolls.push(pins);                          //roll function, push on the array
  this.currentRoll = pins;
};

ScoreCard.prototype.score = function() {          //iterate through the rolls array
  var result = 0;
  var rollIndex = 0;
  var scoreCard = this;
                                                  //rollIndex added to iterate through rolls array frame by frame
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (Strike()) {
        result += getStrikeScore();
        rollIndex++;                              //rollIndex increments by one here due to Strike
    }
    else if (Spare()) {
        result += getSpareScore();
        rollIndex += 2;
    } else {
        result += getNormalScore();
        rollIndex += 2;
    }
  }
  return result;

  function Spare() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex +1] == 10;
  }

  function Strike() {
    return scoreCard.rolls[rollIndex] == 10;
  }

  function getSpareScore() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex + 1] + scoreCard.rolls[rollIndex + 2];      //get two rolls for the frame plus one bonus rolls
  }

  function getStrikeScore() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex + 1] + scoreCard.rolls[rollIndex + 2];      //get one roll for the frame plus two bonus rolls
  }

  function getNormalScore() {
    return scoreCard.rolls[rollIndex] + scoreCard.rolls[rollIndex + 1];
  }
};

ScoreCard.prototype.invalidNumber = function(pins) {
  return (isNaN(pins) || pins < 0 || pins > 10);
};
