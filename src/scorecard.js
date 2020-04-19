const MAX_INITIAL_SCORE = 10

function Scorecard() {
    //this.totalScore will become obsolete shortly.
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
    this.currentFrame = []
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    this.clearCurrentFrame()
    if (roll1 > MAX_INITIAL_SCORE || (roll1 + roll2) > MAX_INITIAL_SCORE) {
        return this.incorrectScore()
    }
    
    this.calculateScore(roll1, roll2)
    this.spareOrStrike(roll1, roll2)
}

Scorecard.prototype.calculateScore = function(roll1, roll2) {
    //this.totalScore += (roll1 + roll2) line below should become useless
    this.totalScore = roll1 + roll2
    if (this.isSpare === true) { 
        score1 = roll1 * 2
        score2 = roll2
    } else if (this.isStrike === true) {
        score1 = roll1 * 2
        score2 = roll2 * 2
    } else {
        score1 = roll1
        score2 = roll2
    }
    this.addScoreToCurrentFrame(score1, score2)
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

Scorecard.prototype.addScoreToCurrentFrame = function(score1, score2) {
    this.currentFrame.push(score1, score2)
}

Scorecard.prototype.clearCurrentFrame = function() {
    this.currentFrame = []
}



