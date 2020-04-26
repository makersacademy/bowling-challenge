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
    this.updateCurrentFrameNumber()
    if (this.currentFrameNumber > MAX_FRAMES) {
        //is there much value gained by putting this in a different method?
        //change this method name
        return this.maxFrames()
    }
    if  (this.currentFrameNumber < MAX_FRAMES && (roll1 > MAX_INITIAL_SCORE || (roll1 + roll2) > MAX_INITIAL_SCORE)) {
        //is there much value gained by putting the return in a different method?
        return this.incorrectScore()
    }
    // console.log(this.currentFrameNumber)
    this.addScoreToCurrentFrame(roll1, roll2)
    ///below is a terrible name; change it; adjusts previous frame scores
    this.spareOrStrikeUpdate(roll1, roll2)
    //this.calculateFrameScore(roll1, roll2)
    this.spareOrStrike(roll1, roll2)
    // console.log(this.isSpare)
    if (this.currentFrameNumber === MAX_FRAMES && this.isSpare === true) {
        this.calculateFrameScore(roll1, roll2, roll3)
    } else if (this.currentFrameNumber === MAX_FRAMES && this.isStrike === true) {
        this.calculateFrameScore(roll1, roll2, roll3)
    } else {
    this.calculateFrameScore(roll1, roll2)
    }

}
    

Scorecard.prototype.updateCurrentFrameNumber = function() {
    this.currentFrameNumber += 1
}

Scorecard.prototype.calculateFrameScore = function(roll1, roll2, roll3=0) {
    var score = roll1 + roll2 + roll3
    //separate below into different method for SRP
    this.frameScoreArray.push(score)
    //added return score here to pass test on/near line 138
    return score
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
    ///Dry this out into separate methods
    //logic for spares
    if ((this.currentFrameNumber > 1) && (this.isSpare === true)) {
        var arrayPosition = this.currentFrameNumber - 2
        this.frameScoreArray[arrayPosition] += roll1
    } 
    //normal or spare followed by 2 strikes
    if ((this.currentFrameNumber > 2) && (this.isStrike === true) && (roll2 === 0) && (this.allFrames[(this.currentFrameNumber - 3)][1]) > 0) {
        var arrayPosition = this.currentFrameNumber - 3
        this.frameScoreArray[arrayPosition] += 0
    //3 + consecutive strike logic
    } else if ((this.currentFrameNumber > 2) && (this.isStrike === true) && (roll2 === 0)) {
        var arrayPosition = this.currentFrameNumber - 3
        this.frameScoreArray[arrayPosition] += roll1
    } 
    //after 1 strike logic
    if ((this.currentFrameNumber > 1) && (this.isStrike === true)) {
        var arrayPosition = this.currentFrameNumber - 2
        this.frameScoreArray[arrayPosition] += (roll1 + roll2)
    } 
    //2 strikes followed by a normal frame
    if (this.isStrike === true && this.currentFrameNumber > 2 && (this.allFrames[(this.currentFrameNumber - 3)][0]) === 10 && (this.allFrames[(this.currentFrameNumber - 2)][0]) === 10 && roll1 != 10) { 
        var arrayPosition = this.currentFrameNumber - 3
        this.frameScoreArray[arrayPosition] += roll1
    }
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

Scorecard.prototype.maxFrames = function() {
    return 'Game finished, cannot add more frames'
}

Scorecard.prototype.incorrectScore = function() {
    return "Incorrect Score"
}

