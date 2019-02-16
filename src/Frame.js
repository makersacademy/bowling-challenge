'use strict';

function Frame(numberOfRolls = 2) {
    this._numberOfRolls = numberOfRolls;
    this._scores = [];
    this._IsStrike = false;
    this._strikeBonusRollsScores = [];
}

Frame.prototype.roll = function(score) {
    if (this._scores.length == this._numberOfRolls) {
        throw new Error('No more rolls this frame.');
    }
    this._scores.push(score);
    if (score == 10) {
        this._numberOfRolls = 1;
        this._IsStrike = true;
    }
};

Frame.prototype.IsAStrike = function() {
    return this._IsStrike;
};

Frame.prototype.sumStrikeBonusRollsScores = function() {
    var accumulator = 0;
    var i;
    for (i = 0; i < this._strikeBonusRollsScores.length; i++) {
        accumulator + this._strikeBonusRollsScores[i];
    }
    return accumulator;
};
