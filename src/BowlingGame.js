var BowlingGame = function() {
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentFrameScore = 0;
    this.rollsInFrame = 0;
    this.pinsLeft = 10;
    this.frames = [];
    this.frameScores = [];
    this.rolls = [];
    this.lastRoll;
};

BowlingGame.prototype.roll = function(pins) {
    this.lastRoll = pins;
    this.rolls.push(pins);

    if (pins > this.pinsLeft) {
        throw (new Error('Only ' + this.pinsLeft + ' pins left!'))
    } else if (this.currentFrame > 12) {
        // WRITE TEST FOR THIS
        throw (new Error('No more rolls left!'))
    } else if (pins === 10) {
        this.strike();
    } else {
        this.currentFrameScore += pins;
        this.rollsInFrame += 1;
        this.pinsLeft -= pins;
    }

    if (this.rollsInFrame === 2) {
        this.addToTotal()
    }

};

BowlingGame.prototype.addToTotal = function() {
    this.currentFrame += 1;
    this.totalScore += this.currentFrameScore;
    this.frames.push(this.currentFrameScore);
    this.currentFrameScore = 0;
    this.rollsInFrame = 0;
    this.pinsLeft = 10;
    if (this.currentFrame === 13) {
    }
};

BowlingGame.prototype.strike = function() {
    this.currentFrameScore += 10;
    this.addToTotal()
};


BowlingGame.prototype.score = function() {
    var result = 0;
    var rollIndex = 0;
    var game = this;
    var totalFrames = 0;
    if (this.currentFrame > 10) {
        totalFrames = 10
    } else {
        totalFrames = this.currentFrame
    }

    for(var frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
        if (isStrike()) {
            result += getStrikeScore();
            // this.frameScores.push(getStrikeScore())
            rollIndex++;
        } else if (isSpare()) {
            result += getSpareScore();
            // this.frameScores.push(getSpareScore())
            rollIndex += 2;
        } else {
            result += getNormalScore();
            // this.frameScores.push(getNormalScore())
            rollIndex += 2;
        }
    }
    this.totalScore += result;
    return result;
    function isSpare() {
       return game.rolls[rollIndex] + game.rolls[rollIndex+1] === 10;
    }
    function isStrike() {
        return game.rolls[rollIndex] === 10;
    }
    function getSpareScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2]
    }
    function getStrikeScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2]
    }
    function getNormalScore() {
        return game.rolls[rollIndex] + game.rolls[rollIndex+1];
    }
};

BowlingGame.prototype.framesTotal = function() {
    var total = 0;
    for(var i = 0; i < this.rolls.length; i++) {
        console.log('adding ' + this.rolls[i] + ' to total of ' + total);
        total += this.rolls[i]
    }
    return total
}

// TO ADD TOTAL OF FRAME
// CHECK IF isNaN(this.score)
// IF YES, DON'T CALCULATE SCORE
// IF NO, ADD SCORE TO FRAME