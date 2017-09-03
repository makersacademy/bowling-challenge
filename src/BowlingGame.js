var BowlingGame = function() {
    this.totalScore = 0;
    this.currentFrame = 1;
    this.currentFrameScore = 0;
    this.rollsInFrame = 0;
    this.pinsLeft = 10;
    this.frames = [];
    this.rolls = [];
    this.strikeState = false;
    this.postStrikeRolls = 0;
};

BowlingGame.prototype.roll = function(pins) {

    if (pins > this.pinsLeft) {
        throw (new Error('Only ' + this.pinsLeft + ' pins left!'))
    } else if (pins === 10) {
        this.strike();
    } else {
        this.currentFrameScore += pins;
        this.rollsInFrame += 1;
        this.pinsLeft -= pins;
        this.rolls.push(pins);
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
};

BowlingGame.prototype.strike = function() {
    this.currentFrameScore += 10;
    this.strikeState = true;
    this.addToTotal()
};

BowlingGame.prototype.scoreOfFrame = function(frame) {
    return this.frames[frame-1]
};

BowlingGame.prototype.score = function() {
    var result = this.rolls.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    return result
}