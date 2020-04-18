function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    this.totalScore += (roll1 + roll2)
    if ((roll1 + roll2) === 10) {
        this.isSpare = true
        
    } else {
        this.isSpare = false
    }
    
}

