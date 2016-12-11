function BowlingGame() {
  this.currentTotal = 0
  this.firstTurn = true
}

BowlingGame.prototype.playBall = function() {
  if (this.firstTurn === false) {
    this.firstTurn = true;
    frame.moveToNextFrame();
  } else {
    this.firstTurn = false;
  }
  pins.attemptBall()
  this.currentTotal = 4;
  return 4;
}

BowlingGame.prototype.startAgain = function() {
  frame.resetFrame();
}
