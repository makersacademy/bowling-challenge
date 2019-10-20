function BowlingScore() {
  this.round = ""
  this.currRound = 0
}

BowlingScore.prototype.newRound = function() {
  this.currRound += 1
  return this.round = new Round()
}

BowlingScore.prototype.addScore = function(prevPlus, prevScore) {
  if (prevPlus === "strike") {
    this.round.currentScore += prevScore + this.round.currentScore
  } else if (prevPlus === "spare") {
    this.round.currentScore += prevScore + this.round.roll1
  } else {
    this.round.currentScore += prevScore
  }
}

BowlingScore.prototype.bonusRound = function() {
  this.round.currentScore += this.round.roll3
}


// implement gutter game = 0 score 20 times
// implement perfect game = 12 strikes will be 300 points
// implement check to not enter sum > 10
