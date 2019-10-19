function BowlingScore() {
  this.round = ""
  this.currRound = 0
}

BowlingScore.prototype.newRound = function() {
  this.currRound += 1
  return this.round = new Round()
}

BowlingScore.prototype.addScore = function(prevRound) {
  if (prevRound.plus === "strike") {
    prevRound.currentScore += this.round.currentScore
  } else if (prevRound.plus === "spare") {
    prevRound.currentScore += this.round.roll1
  }
    this.round.currentScore += prevRound.currentScore
}
