function BonusBowl() {
    this.score = 0;
    this._isComplete = false;
}

BonusBowl.prototype.totalScore = function () {
    return this.score;
};

BonusBowl.prototype.bowl = function (score) {
    if (this.isComplete()) {
        throw new Error("Bonus bowl already complete");
    }
    if (!Number.isInteger(score) || score < 0 || score > 10) {
        throw new Error("Score must be an integer 0-10");
    }
    this.score = score;
    this._isComplete = true;
};

BonusBowl.prototype.isComplete = function () {
    return this._isComplete;
};

module.exports = BonusBowl;