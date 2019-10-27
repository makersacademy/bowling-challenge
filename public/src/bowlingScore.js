function BowlingScore() {
  this.round = ""
  this.currRound = 0
  this.prevRound = ""
}

BowlingScore.prototype.newRound = function() {
  this.currRound += 1
  this.prevRound = this.round
  return this.round = new Round()
}

BowlingScore.prototype.finalScore = function() {
  if (this.prevRound.plus === "strike") {
    this.round.currentScore += this.prevRound.score + this.round.currentScore
  } else if (this.prevRound.plus === "spare") {
    this.round.currentScore += this.prevRound.score + this.round.roll1
  } else {
    this.round.currentScore += this.prevRound.score
  }
}

BowlingScore.prototype.bonusRound = function() {
  this.round.currentScore += this.round.roll3
}


// implement gutter game = 0 score 20 times
// implement perfect game = 12 strikes will be 300 points
// implement check to not enter sum > 10
