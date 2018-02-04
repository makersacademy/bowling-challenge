function Frame() {
    this.rolls = [];
    this.nextFrame = null;
}

Frame.prototype.rollValues = function() {
    return this.rolls;
};

Frame.prototype.frameScore = function() {
    var score = this.rolls.reduce((r1, r2) => r1 + r2, 0);
    return score;
};

Frame.prototype.isStrike = function() {
    return this.rolls[0] === 10; 
};

Frame.prototype.isSpare = function() {
    return this.frameScore() === 10;
};

Frame.prototype.addRoll = function(pins) {
    // TODO: Add error handling to throw exception when trying to add to a completed
    // frame
    this.rolls.push(pins);
};

Frame.prototype.isDone = function() {
    return this.isStrike() || this.isSpare() || (this.rolls.length === 2);
};