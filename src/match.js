'use strict'

function Match() {
  this.roundCount = 0;
  this.strikeRounds = [];
  this.spareRounds = [];
  this.runningFrameScores = [];
}

Match.prototype.playFrame = function(roll1, roll2 = undefined) {
  var frame = new Frame()

  var roundScoreArray = frame.playRound(roll1, roll2)

  this.roundCount++

  this.addToScoreArray(roundScoreArray);

  this.identifyMultiplierRounds(roundScoreArray)

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
