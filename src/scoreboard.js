function Scoreboard() {
  this.totalScore = 0;
}

Scoreboard.prototype.calculateTotalScore = function(currentGame) {
  currentGame.frames.forEach(frame => {
    this.totalScore += frame.score;
  });
  return this.totalScore;
}

