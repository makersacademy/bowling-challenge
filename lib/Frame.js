function Frame() {
    this.bowlCount = 0;
    this.firstBowl = 0;
    this.secondBowl = 0;
}

Frame.prototype.bowl = function (score) {
    if (!Number.isInteger(score) || score < 0 || score > 10) {
        throw new Error("Score must be an integer 0-10");
    }
    if (this.bowlCount < 1) {
        this.firstBowl = score;
    } else if (this.bowlCount < 2) {
        if (this.firstBowl + score > 10) {
            throw new Error("Invalid score");
        }
        this.secondBowl = score;
    }
    this.bowlCount++;
};

Frame.prototype.totalScore = function () {
    if (this.bowlCount === 0) {
        return 0;
    }
    if (this.bowlCount === 1) {
        return this.firstBowl;
    }
    return this.firstBowl + this.secondBowl;
};

Frame.prototype.isAStrike = function () {
    return this.firstBowl === 10;
};

Frame.prototype.isASpare = function () {
    return this.totalScore() === 10 && this.firstBowl < 10;
};

Frame.prototype.isComplete = function () {
    return this.isAStrike() || this.bowlCount === 2;
};

module.exports = Frame;