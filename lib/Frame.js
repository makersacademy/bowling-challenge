function Frame() {
    this.bowlCount = 0;
    this.firstBowl = 0;
    this.secondBowl = 0;
}

Frame.prototype.bowl = function(score) {
    if (this.bowlCount < 1) {
        this.firstBowl = score;
    } else if (this.bowlCount < 2) {
        this.secondBowl = score;
    }
    this.bowlCount++;
};

Frame.prototype.totalScore = function() {
    if (this.bowlCount === 0) {
        return 0;
    } else if (this.bowlCount === 1) {
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
    return this.isAStrike() || this.bowlCount === 2;
};

module.exports = Frame;