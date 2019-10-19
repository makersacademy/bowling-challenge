function BowlingScore() {
  this.round = ""
}

BowlingScore.prototype.newRound = function() {
  return this.round = new Round()
}

BowlingScore.prototype.addPlus = function(prevRound) {
  return prevRound.tot += this.round.tot
  };

BowlingScore.prototype.checkPlus = function(prevRound) {
  if (prevRound.plus !== "") {
    prevRound.tot = this.addPlus(prevRound)
  }
}
