function Game () {
  this.rollScores = [];
}

Game.prototype.rollBall = function(pins) {
  this.rollScores.push(pins);
}

Game.prototype.score = function() {
  var score = 0; 
  for (var rollScoresIndex = 0; rollScoresIndex < 20; rollScoresIndex+=2) {
    if (this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1] == 10) {
      score += this.spareScore(rollScoresIndex) 
    } else if (this.rollScores[rollScoresIndex] === 10) {
        this.rollScores.splice(rollScoresIndex+1, 0, 0)
        score += this.strikeScore(rollScoresIndex) }
    else {
    score += this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1]
    }
  }
  return score
}

Game.prototype.spareScore = function(rollScoresIndex) {
 return  this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1] + this.rollScores[rollScoresIndex + 2]
}

Game.prototype.strikeScore = function(rollScoresIndex) {
  return this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 2] + this.rollScores[rollScoresIndex + 3]
}

Game.prototype.isSpare = function(rollScoresIndex) {
 (this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1] === 10)
}
