function BowlingGame() {
  this.totalScore = 0
}

BowlingGame.prototype.playBall = function() {
  pins.rollBall();
}

BowlingGame.prototype.startAgain = function() {
  frame.resetFrame();
}
