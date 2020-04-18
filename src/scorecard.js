function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    this.totalScore += (roll1 + roll2)
}

