function Frame() {
}

Frame.prototype.bowl = function(score) {
    if (this.firstBowl === undefined) {
        this.firstBowl = score;
    } else if (this.secondBowl === undefined) {
        this.secondBowl = score;
    }
};

Frame.prototype.totalScore = function() {
    if (this.firstBowl === undefined) {
        return 0;
    } else if (this.secondBowl === undefined) {
        return this.firstBowl;
    } 
    return this.firstBowl + this.secondBowl;
};

Frame.prototype.isAStrike = function() {
    return this.firstBowl === 10;
};

Frame.prototype.isASpare = function() {
    return this.totalScore() === 10 && this.firstBowl < 10;
};

Frame.prototype.isComplete = function() {
    return this.isAStrike() || this.secondBowl !== undefined;
};

module.exports = Frame;