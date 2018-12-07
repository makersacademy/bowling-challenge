'use strict'

function BowlingMatch() {
this.roundCount = 0;
this.strikeRounds = [];
this.spareRounds = [];
this.runningScore = [];

}

BowlingMatch.prototype.scoreSum = function(array) {
  var sum = array.reduce(function(a,b) {
    return a + b;
  }, 0);
  return sum
};

BowlingMatch.prototype.roundScore = function(roll1, roll2 = undefined) {
  var roundScoreArray = [];

  roundScoreArray.push(roll1);

  if (roll1 < 10) {
    roundScoreArray.push(roll2);
  }

  this.roundCount++;

  this.identifyMultiplierRounds(roundScoreArray);

  this.runningScoreUpdater(roundScoreArray);

  return roundScoreArray;
};

BowlingMatch.prototype.identifyMultiplierRounds = function(roundScoreArray) {
  if (roundScoreArray.length === 1) {
    this.strikeRounds.push(this.roundCount);
  }
  else if (this.scoreSum(roundScoreArray) === 10) {
    this.spareRounds.push(this.roundCount);
  }
};


BowlingMatch.prototype.runningScoreUpdater = function(roundScoreArray) {

  if (this.roundCount < 10) {
    this.runningScore.push(roundScoreArray)
  }
  else {
    this.runningScore.push(roundScoreArray)

    console.log(this.totalScore());
  }
};

BowlingMatch.prototype.totalScore = function() {
  var finalScore = this.scoreSum(this.runningScore.flat());
  return finalScore;
};
