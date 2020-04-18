function Scorecard() {
    this.totalScore = 0
}

Scorecard.prototype.addNewScore = function(roll1, roll2) {
    this.totalScore += (roll1 + roll2)
}