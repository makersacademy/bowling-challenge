'use strict'

function Match() {
  this.roundCount = 0;
  this.strikeRounds = [];
  this.spareRounds = [];
  this.runningFrameScores = [];
  this.runningScoreArray = [];
}

Match.prototype.playFrame = function(roll1, roll2 = undefined) {
  var frame = new Frame()

  var roundScoreArray = frame.playRound(roll1, roll2)

  this.roundCount++

  this.addToScoreArray(roundScoreArray);

  this.identifyMultiplierRounds(roundScoreArray)

  this.addToRunningScoreArray(this.runningFrameScores, this.strikeRounds, this.spareRounds)

}


Match.prototype.identifyMultiplierRounds = function(roundScoreArray) {

  var scoreCalculator = new ScoreCalculator();

  if (roundScoreArray.length === 1) {
    this.strikeRounds.push(this.roundCount);
  }
  else if (scoreCalculator.sumRoundScore(roundScoreArray) === 10) {
    this.spareRounds.push(this.roundCount);
  }
}

Match.prototype.addToScoreArray = function(frameRolls) {
  this.runningFrameScores.push(frameRolls);
}

Match.prototype.addToRunningScoreArray = function(runningFrameScores, strikeRounds, spareRounds) {
  var scoreCalculator = new ScoreCalculator();

  var totalScoreSoFar = scoreCalculator.totalScore(runningFrameScores, strikeRounds, spareRounds);

  this.runningScoreArray.push(totalScoreSoFar);
}

Match.prototype.finalRoundCheck = function() {
  var frame = new Frame();
  var scoreCalculator = new ScoreCalculator();

  var finalFrame = this.runningFrameScores[9]

  // Should be 10 when put into play round

  // if (frame.isItAStrike(finalFrame) {
  //
  // }
  //
  // else if (frame.isItASpare(finalFrame) {
  //
  // }
  //
  // else {
  //   return scoreCalculator.totalScore(this.runningFrameScores, this.strikeRounds, this.spareRounds)
  // }

}



// If round = 10 and not spare or strike return final score
// else frame.finalFrame(scores from last)
