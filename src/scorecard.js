const MAX_INITIAL_SCORE = 10

function Scorecard() {
    this.totalScore = 0
    this.isSpare = false
    this.isStrike = false
    this.currentFrame = []
    this.allFrames = []
    this.frameScoreArray = []
    this.currentFrameNumber = 0
}

Scorecard.prototype.addNewScore = function(roll1, roll2=0) {
    this.clearCurrentFrame()
    if (roll1 > MAX_INITIAL_SCORE || (roll1 + roll2) > MAX_INITIAL_SCORE) {
        return this.incorrectScore()
    }
    //
    //this.frameNumber += 1
    //
    this.updateCurrentFrameNumber()
    console.log(this.currentFrameNumber)
    this.addScoreToCurrentFrame(roll1, roll2)
    this.spareOrStrikeUpdate(roll1, roll2)
    this.calculateFrameScore(roll1, roll2)
    this.spareOrStrike(roll1, roll2)
   
    
}

Scorecard.prototype.updateCurrentFrameNumber = function() {
    this.currentFrameNumber += 1
}

Scorecard.prototype.calculateFrameScore = function(roll1, roll2) {
    score = roll1 + roll2
    //separate below into different method for SRP
    this.frameScoreArray.push(score)
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


Scorecard.prototype.spareOrStrikeUpdate = function(roll1, roll2) {
    console.log(roll1)
    ///Dry this out into separate methods
    //logic for spares
    if ((this.currentFrameNumber > 1) && (this.isSpare === true)) {
        var arrayPosition = this.currentFrameNumber - 2
        this.frameScoreArray[arrayPosition] += roll1
    } 
    //3 + consecutive strike logic
    if ((this.currentFrameNumber > 2) && (this.isStrike === true) && (roll2 === 0)) {
        var arrayPosition = this.currentFrameNumber - 3
        this.frameScoreArray[arrayPosition] += roll1
    } 
    //after 1 strike logic
    if ((this.currentFrameNumber > 1) && (this.isStrike === true)) {
        var arrayPosition = this.currentFrameNumber - 2
        this.frameScoreArray[arrayPosition] += (roll1 + roll2)
    } 
    //2 consecutive strike logic
    if (this.isStrike === true && this.currentFrameNumber > 2 && (this.allFrames[(this.currentFrameNumber - 3)][0]) === 10 && (this.allFrames[(this.currentFrameNumber - 2)][0]) === 10 && roll1 != 10) { 
        var arrayPosition = this.currentFrameNumber - 3
        console.log("hello")
        this.frameScoreArray[arrayPosition] += roll1
    }

    
    //if currenntFrameNumber - 1 roll1 = 10 && currentFrameNumber - 2 roll1 = 10
    //if ((this.currentFrameNumber > 2) && (this.isStrike === true) && roll2 > 0) {
    // }
}



Scorecard.prototype.addScoreToCurrentFrame = function(score1, score2) {
    this.currentFrame.push(score1, score2)
    this.addCurrentToAllFrames(this.currentFrame)
    //below is now looking incorrect as total will not be total of framesScoreArray
    this.calculateTotalScore(this.allFrames)
}

Scorecard.prototype.clearCurrentFrame = function() {
    this.currentFrame = []
}

Scorecard.prototype.addCurrentToAllFrames = function(currentFrame) {
    this.allFrames.push(currentFrame)
}

Scorecard.prototype.calculateTotalScore = function(array) {    
        var runningTotal = 0
        array.forEach(function(entry) {
            for (var i = 0; i < entry.length; i++) {
                runningTotal += entry[i]
            }
        })
        this.totalScore = runningTotal
        //console log so I don't have to run card.totalScore when feature testing
        //console.log(this.totalScore)
    }

Scorecard.prototype.incorrectScore = function() {
    return "Incorrect Score"
}


