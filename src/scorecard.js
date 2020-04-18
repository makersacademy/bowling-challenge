function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    this.totalScore += (roll1 + roll2)
    if (roll1 === 10) {
        this.isStrike = true
        this.isSpare = false
    } else if ((roll1 + roll2) === 10) {
        this.isSpare = true
        this.isStrike = false
    } else {
        this.isSpare = false
        this.isStrike = false
    }
}

