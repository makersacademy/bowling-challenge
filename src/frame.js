'use strict';

function Frame() {
    this._PINS = 10;
    this._scores = [];
    this._currentTurn = 0;
    this._turnsRemaining = 2;
}

Frame.prototype.turn = function(pins) {
    this._currentTurn++;
    this._turnsRemaining--;
    this._scores.push(pins);
};

Frame.prototype.isStrike = function() {
    return this._scores[0] === this._PINS
}

Frame.prototype.isSpare = function() {
    return !this.isStrike() && this.score() === this._PINS
}

Frame.prototype.score = function() {
    return this._scores.reduce(function(total, score) {
        return total + score;
    });
}

Frame.prototype.isEnded = function() {
    return this._turnsRemaining === 0 || this.isStrike();
}
