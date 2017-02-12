'use strict';

function Frame() {
    this._PINS = 10;
    this._scores = [];
    this._turnsRemaining = 2;
}

Frame.prototype.turn = function(pins) {
    this._turnsRemaining--;
    this.addScore(pins);
}

Frame.prototype.addScore = function(pins) {
    this._scores.push(pins);
}

Frame.prototype.firstScore = function() {
    return this._scores[0];
}

Frame.prototype.secondScore = function() {
    if (this.isStrike()) {
        return 0;
    }
    return this._scores[1];
}

Frame.prototype.isStrike = function() {
    return this.firstScore() === this._PINS
}

Frame.prototype.isSpare = function() {
    return !this.isStrike() && this.score() === this._PINS
}

Frame.prototype.score = function() {
    return this._scores.reduce(function(total, score) {
        return total + score;
    }, 0);
}

Frame.prototype.isFrameEnded = function() {
    return this._turnsRemaining === 0 || this.isStrike();
}
