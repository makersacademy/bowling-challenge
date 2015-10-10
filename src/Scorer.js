function ScoreCard() {
  this.currentScore = 0;
  this.roundsLeft = 10;
  this.possibleBalls = this.roundsLeft * 2;
}

ScoreCard.prototype.scoreRound = function(ball1, ball2) {
  this.currentScore += (ball1 + ball2);
  this.possibleBalls -= 2;
};
