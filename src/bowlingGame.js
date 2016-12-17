function BowlingGame() {
  this.totalScore = 0
}

BowlingGame.prototype.playBall = function() {
  pins.attemptBall();
}

BowlingGame.prototype.startAgain = function() {
  frame.resetFrame();
}
