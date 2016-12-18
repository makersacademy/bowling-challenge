function BowlingGame() {
  this.totalScore = 0
  this.pins = new KnockDownPin(this)
}

BowlingGame.prototype.playBall = function() {
  return this.pins.rollBall()
}

BowlingGame.prototype.startAgain = function() {
  frame.resetFrame();
}

BowlingGame.prototype.calculateScore = function() {
  this.totalScore = this.pins.firstRollScore + this.pins.secondRollScore;
}
