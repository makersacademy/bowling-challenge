const MAX_INITIAL_SCORE = 10

function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    if (roll1 > MAX_INITIAL_SCORE || (roll1 + roll2) > MAX_INITIAL_SCORE) {
        return this.incorrectScore()
    }
    this.calculateScore(roll1, roll2)
    this.spareOrStrike(roll1, roll2)
}

Scorecard.prototype.calculateScore = function(roll1, roll2) {
    return this.totalScore += roll1 + roll2
}

Scorecard.prototype.spareOrStrike = function(roll1, roll2) {
    if (roll1 === MAX_INITIAL_SCORE) {
        this.isStrike = true
        this.isSpare = false
    } else if ((roll1 + roll2) === MAX_INITIAL_SCORE) {
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



