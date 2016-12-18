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
  return this.totalScore += this.pins.firstRollScore + this.pins.secondRollScore;
}

BowlingGame.prototype.spare_scored = function() {
  return "heu"
}

BowlingGame.prototype.strike_scored = function() {
  return "hey"
}

BowlingGame.prototype.currentFrame = function() {
  return this.pins.getCurrentFrame()
}
