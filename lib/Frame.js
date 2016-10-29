function Frame() {
    this.totalScore = 0;
}

Frame.prototype.bowl = function(score) {
    if (this.firstBowl === undefined) {
        this.firstBowl = score;
    } else if (this.secondBowl === undefined) {
        this.secondBowl = score;
    }
    this.calculateScore();
    return this.totalScore;
};

Frame.prototype.calculateScore = function() {
    if (this.firstBowl === undefined) {
        return this.totalScore;
    } else if (this.secondBowl === undefined) {
        return this.totalScore = this.firstBowl;
    } 
    return this.totalScore = this.firstBowl + this.secondBowl;
};

module.exports = Frame;