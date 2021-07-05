const MAX_INITIAL_SCORE = 10
const MAX_FRAMES = 10

function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
    this.currentFrame = []
    this.allFrames = []
    this.frameScoreArray = []
    this.currentFrameNumber = 0
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0, roll3=0) {
    this.clearCurrentFrame()
    this.reachedFrameLimit()
    if (this.currentFrameNumber === MAX_FRAMES) {
        return this.reachedFrameLimit()
    }

    this.updateCurrentFrameNumber()

    if  (this.currentFrameNumber < MAX_FRAMES && (roll1 > MAX_INITIAL_SCORE || (roll1 + roll2) > MAX_INITIAL_SCORE)) {
        return this.incorrectScore()
    }

    this.addScoreToCurrentFrame(roll1, roll2)
    this.updatePreviousFrameScores(roll1, roll2)
    this.spareOrStrike(roll1, roll2)
    this.howToCalculateFrameScore(roll1, roll2, roll3)
}

//should add separate tests for this?
Scorecard.prototype.howToCalculateFrameScore = function (roll1, roll2, roll3) {
    if (this.currentFrameNumber === MAX_FRAMES && this.isSpare === true) {
        this.calculateFrameScore(roll1, roll2, roll3)
    } else if (this.currentFrameNumber === MAX_FRAMES && this.isStrike === true) {
        this.adjustFrameEightInPerfectGame(roll2, roll3)
        this.calculateFrameScore(roll1, roll2, roll3)
    } else {
        this.calculateFrameScore(roll1, roll2)
    }
}

Scorecard.prototype.adjustFrameEightInPerfectGame = function(roll2, roll3) {
    //this method adjusts frame eight in a perfect game. It was the simplest way to adjust
    //the score in this scenario without more complicated adjustments.
    if (roll2 === 10 && roll3 === 10) {
        this.frameScoreArray[7] += 10
    }
}

Scorecard.prototype.updateCurrentFrameNumber = function() {
    this.currentFrameNumber += 1
}

Scorecard.prototype.calculateFrameScore = function(roll1, roll2, roll3=0) {
    var score = roll1 + roll2 + roll3
    this.addToFrameScoreArray(score)
    //added return score here to pass test on/near line 138
    return score
}

Scorecard.prototype.addToFrameScoreArray = function(score) {
    this.frameScoreArray.push(score)
    this.calculateTotalScore(this.frameScoreArray)
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


Scorecard.prototype.updatePreviousFrameScores = function(roll1, roll2) {
    //read method names in conjunction with updatePreviousFrameScores
    if ((this.currentFrameNumber > 1) && (this.isSpare === true)) {
        this.afterSpare(roll1, roll2)
    } 
    
    if ((this.currentFrameNumber > 2) && (this.isStrike === true) && (roll2 === 0) && (this.allFrames[(this.currentFrameNumber - 3)][1]) > 0) {
        this.doesNotChangeNormalFrameAfterTwoStrikes()
    } else if ((this.currentFrameNumber > 2) && (this.isStrike === true) && (roll2 === 0)) {
        this.afterConsecutiveStrikes(roll1)
    } 

    if ((this.currentFrameNumber > 1) && (this.isStrike === true)) {
        this.afterOneStrike(roll1, roll2)
    } 

    if (this.isStrike === true && this.currentFrameNumber > 2 && (this.allFrames[(this.currentFrameNumber - 3)][0]) === 10 && (this.allFrames[(this.currentFrameNumber - 2)][0]) === 10 && roll1 != 10) { 
        this.afterTwoStrikesAndNormalFrame(roll1)
    }
}

Scorecard.prototype.afterSpare = function(roll1, roll2) {       
    var arrayPosition = this.currentFrameNumber - 2
    this.frameScoreArray[arrayPosition] += roll1
}

Scorecard.prototype.doesNotChangeNormalFrameAfterTwoStrikes = function() {
    //this method prevents a normal frame from receiving a bonus when it is followed by two strikes
    //view in conjunction with afterConsecutiveStrikes
    var arrayPosition = this.currentFrameNumber - 3
    this.frameScoreArray[arrayPosition] += 0
}

Scorecard.prototype.afterConsecutiveStrikes = function(roll1) {
    var arrayPosition = this.currentFrameNumber - 3
    this.frameScoreArray[arrayPosition] += roll1
}

Scorecard.prototype.afterOneStrike = function(roll1, roll2) {
    var arrayPosition = this.currentFrameNumber - 2
    this.frameScoreArray[arrayPosition] += (roll1 + roll2)
}

Scorecard.prototype.afterTwoStrikesAndNormalFrame = function(roll1) { 
    var arrayPosition = this.currentFrameNumber - 3
    this.frameScoreArray[arrayPosition] += roll1
}

Scorecard.prototype.addScoreToCurrentFrame = function(score1, score2) {
    this.currentFrame.push(score1, score2)
    this.addCurrentToAllFrames(this.currentFrame)
    this.calculateTotalScore(this.allFrames)
}

Scorecard.prototype.clearCurrentFrame = function() {
    this.currentFrame = []
}

Scorecard.prototype.addCurrentToAllFrames = function(currentFrame) {
    this.allFrames.push(currentFrame)
}

Scorecard.prototype.calculateTotalScore = function(scoreArray) {  
        var runningTotal = 0
            for (var i = 0; i < scoreArray.length; i++) {
                runningTotal += scoreArray[i]
            }
        this.totalScore = runningTotal
    }

Scorecard.prototype.finalScore = function(totalScore) {
    if (totalScore === 0) {
        return "GUTTER GAME"
    }
    if (totalScore === 300) {
        return "PERFECT GAME"
    }
    return "You scored " + totalScore
}

Scorecard.prototype.reachedFrameLimit = function() {
    return 'Game finished, cannot add more frames'
}

Scorecard.prototype.incorrectScore = function() {
    return "Incorrect Score"
}



