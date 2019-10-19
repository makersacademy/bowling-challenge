function BowlingScore() {
  this.round = ""
}

BowlingScore.prototype.newRound = function() {
  this.round = new Round()
}

BowlingScore.prototype.addPlus = function (newTot) {
    return 10 + newTot
  };
