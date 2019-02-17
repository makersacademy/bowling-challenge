'use strict';

function Frame(numberOfRolls = 2) {
    this._numberOfRolls = numberOfRolls;
    this.scores = [];
    this._IsTenthFrame = false;
    this._strikeBonusRollsScores = [];
    this._spareBonusRollsScore = 0;
}

Frame.prototype.roll = function(score) {
    if (this.scores.length == this._numberOfRolls) {
        throw new Error('No more rolls this frame.');
    }
    this.scores.push(score);
    if (this.IsAStrike()) {
        this._numberOfRolls = 1;
        if (this.IsTenthFrame()) {
            this._numberOfRolls = 3;
        }
    } else if (this.IsASpare()) {
        this._IsSpare = true;
        if (this.IsTenthFrame()) {
            this._numberOfRolls = 3;
        }
    }
};

Frame.prototype.IsAStrike = function() {
    return this.scores[0] == 10
};

Frame.prototype.IsASpare = function() {
    return ((this.scores.length == 2) && (this.scores[0] + this.scores[1] == 10));
};

Frame.prototype.IsTenthFrame = function() {
    return this._IsTenthFrame;
};

Frame.prototype.sumStrikeBonusRollsScores = function() {
    var accumulator = 0;
    var i;
    for (i = 0; i < this._strikeBonusRollsScores.length; i++) {
        accumulator += this._strikeBonusRollsScores[i];
    }
    return accumulator;
};
