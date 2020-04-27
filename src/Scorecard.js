'use strict';

function Scorecard() {
    this.frameNumber = 1
    this.rollNumber = 1
    this._accumScore = []
}

Scorecard.prototype.storedScores = function() {
    return this._accumScore
}

Scorecard.prototype.getCurrentScore = function() {

    return this.gameScore
}

Scorecard.prototype.rollScore = function(score) {
    if (score > 10) {
        throw new Error('There are only 10 pins silly!')
    }
        this._accumScore.push(score);
        return score;

}

Scorecard.prototype.calculateScore = function() {
    return this._accumScore.reduce(function(a,b) {
        return a + b
    }, 0);
}
