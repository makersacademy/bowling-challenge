function BonusBowl() {
    this.firstBowl = 0;
    this.bowlCount = 0;
    this._isComplete = false;
}

BonusBowl.prototype.totalScore = function () {
    return this.firstBowl;
};

BonusBowl.prototype.bowl = function (score) {
    if (this.isComplete()) {
        throw new Error("Bonus bowl already complete");
    }
    if (!Number.isInteger(score) || score < 0 || score > 10) {
        throw new Error("Score must be an integer 0-10");
    }
    this.firstBowl = score;
    this.bowlCount = 1;
    this._isComplete = true;
};

BonusBowl.prototype.isComplete = function () {
    return this._isComplete;
};

BonusBowl.prototype.isAStrike = function () {
    return this.firstBowl === 10;
}

BonusBowl.prototype.isABonusBowl = function () {
    return true;
}

module.exports = BonusBowl;