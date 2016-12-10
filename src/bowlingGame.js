function BowlingGame() {
  this.currentTotal = 0
  this.firstTurn = true
}

BowlingGame.prototype.playBall = function() {
  if (this.firstTurn !== true) {
    frame.moveToNextFrame();
  }
  this.firstTurn = false
}
