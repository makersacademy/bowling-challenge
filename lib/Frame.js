function Frame() {

}

Frame.prototype.totalScore = function() {
    return 0;
};

Frame.prototype.bowl = function(score) {
    if (this.firstBowl === undefined) {
        return this.firstBowl = score;
    } else if (this.secondBowl === undefined) {
        return this.secondBowl = score;
    }
};
module.exports = Frame;