'use strict';

function Frame(numberOfRolls = 2) {
    this._numberOfRolls = numberOfRolls;
    this.scores = [];
    this._IsStrike = false;
    this._IsSpare = false;
    this._strikeBonusRollsScores = [];
    this._spareBonusRollsScore = 0;
}

Frame.prototype.roll = function(score) {
    if (this.scores.length == this._numberOfRolls) {
        throw new Error('No more rolls this frame.');
    }
    this.scores.push(score);
    if (this.scores[0] == 10) {
        this._numberOfRolls = 1;
        this._IsStrike = true;
    } else if (this.scores.length == 2) {
        if ((this.scores[0] + this.scores[1]) == 10) {
            this._IsSpare = true;
        }
    }
};

Frame.prototype.IsAStrike = function() {
    return this._IsStrike;
};

Frame.prototype.IsASpare = function() {
    return this._IsSpare;
};

Frame.prototype.sumStrikeBonusRollsScores = function() {
    var accumulator = 0;
    var i;
    for (i = 0; i < this._strikeBonusRollsScores.length; i++) {
        accumulator += this._strikeBonusRollsScores[i];
    }
    return accumulator;
};
