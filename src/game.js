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
      score += this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1] + this.rollScores[rollScoresIndex + 2]
    }
    else {
    score += this.rollScores[rollScoresIndex] + this.rollScores[rollScoresIndex + 1]
    }
  }
  return score
}
