function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
    
    
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    if (roll1 > 10 || (roll1 + roll2) > 10) {
        return this.incorrectScore()
    }
    this.totalScore += (roll1 + roll2)
    this.spareOrStrike(roll1, roll2)
}

Scorecard.prototype.spareOrStrike = function(roll1, roll2) {
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

Scorecard.prototype.incorrectScore = function() {
    return "Incorrect Score"
}



