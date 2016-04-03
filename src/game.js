function Game () {
  this.rollScores = [];
}

Game.prototype.rollBall = function(pins) {
  this.rollScores.push(pins);
}

Game.prototype.score = function() {
  var score = 0; 
  for (var rollScoresIndex = 0; rollScoresIndex < 20; rollScoresIndex+=2) {
    if (this.isSpare(rollScoresIndex)) {
      score += this.spareScore(rollScoresIndex) 
    } else if (this.isStrike(rollScoresIndex)) {
      this.addZeroAfterStrike(rollScoresIndex);
      score += this.strikeScore(rollScoresIndex) }
    else {
      score += this.standardScore(rollScoresIndex)
    }
  }
  return score
}

Game.prototype.spareScore = function(rollScoresIndex) {
  var thisRoll = this.rollScores[rollScoresIndex];
  var nextRoll = this.rollScores[rollScoresIndex + 1];
  var secondNextRoll = this.rollScores[rollScoresIndex + 2];
  return thisRoll + nextRoll + secondNextRoll 
}

Game.prototype.standardScore = function(rollScoresIndex) {
  var thisRoll = this.rollScores[rollScoresIndex];
  var nextRoll = this.rollScores[rollScoresIndex + 1];
  return thisRoll + nextRoll
}

Game.prototype.strikeScore = function(rollScoresIndex) {
  var thisRoll = this.rollScores[rollScoresIndex];
  var secondNextRoll = this.rollScores[rollScoresIndex + 2];
  var thirdNextRoll = this.rollScores[rollScoresIndex + 3];
  return thisRoll + secondNextRoll + thirdNextRoll
}

Game.prototype.isSpare = function(rollScoresIndex) {
  var thisRoll = this.rollScores[rollScoresIndex];
  var nextRoll = this.rollScores[rollScoresIndex + 1];
  return thisRoll + nextRoll === 10;
}

Game.prototype.isStrike = function(rollScoresIndex) {
  var thisRoll = this.rollScores[rollScoresIndex];
  return thisRoll === 10;
}

Game.prototype.addZeroAfterStrike = function(rollScoresIndex) {
  this.rollScores.splice(rollScoresIndex + 1, 0, 0)
}

