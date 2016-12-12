function BowlingGame() {
  this.currentTotal = 0
}

BowlingGame.prototype.playBall = function() {
  pins.attemptBall()
}

BowlingGame.prototype.startAgain = function() {
  frame.resetFrame();
}
