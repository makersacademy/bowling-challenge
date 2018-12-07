'use strict'

function ScoreCalculator() {

}

ScoreCalculator.prototype.sumRoundScore = function(array) {
  var sum = array.reduce(function(a,b) {
    return a + b;
  }, 0);
  return sum
}

ScoreCalculator.prototype.totalScore = function(runningFrameScores, strikeRounds, spareRounds) {
  var finalScore

  if ((strikeRounds.length + spareRounds.length) === 0) {
    finalScore = this.sumRoundScore(runningFrameScores.flat());
    return finalScore; }
  else {

    var strikeRoundScores = this.doubleRoundsAfterStrikes(runningFrameScores, strikeRounds);

    var finalScoreArray = this.doubleRollsAfterSpares(strikeRoundScores, spareRounds);

    finalScore = this.sumRoundScore(finalScoreArray.flat());

    return finalScore
  }
}

ScoreCalculator.prototype.doubleRoundsAfterStrikes = function(runningFrameScores, strikeRounds) {
  var strikesAccountedFor = runningFrameScores.map(function(array, index) {
    if (strikeRounds.includes(index)) {
      var doubledValuesArray = [];
      array.forEach(function(element) {
        doubledValuesArray.push(element, element);
      });
      return doubledValuesArray;
    }
    else {
      return array;
    }
  });
  return strikesAccountedFor;
};

ScoreCalculator.prototype.doubleRollsAfterSpares = function(runningFrameScores, spareRounds) {
  var spareRoundsAccountedFor = runningFrameScores.map(function(array, index) {
    if (spareRounds.includes(index)) {
      var doubledFirstElement = [];
      doubledFirstElement.push(array, array[0])
      return doubledFirstElement.flat();
    }
    else {
      return array;
    }
  });
  return spareRoundsAccountedFor;
}
