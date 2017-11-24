'use strict';

(function(exports) {
    var Score = function(rolls) {
        this.frames = [];
        this._plays(rolls);
    };

    Score.prototype = {
        total: function() {
            return last(this.frames).accumulatedScore;
        },

        _plays: function(rolls) {
            if (this._isLastFrame()) {
                return this._frame(rolls);
            }
            if (this._isStrike(rolls)) {
                return this._strike(rolls);
            }
            if (this._isSpare(rolls)) {
                return this._spare(rolls);
            }
            return this._noBonus(rolls);
        },

        _strike: function(rolls) {
            this._frame(firstRolls(rolls, 3));
            let slicedRolls = removeRolls(rolls, 1);
            this._plays(slicedRolls);
        },

        _spare: function(rolls) {
            this._frame(firstRolls(rolls, 3));
            let slicedRolls = removeRolls(rolls, 2);
            this._plays(slicedRolls);
        },

        _noBonus: function(rolls) {
            this._frame(firstRolls(rolls, 2));
            let slicedRolls = removeRolls(rolls, 2);
            this._plays(slicedRolls);
        },

        _isStrike: function(rolls) {
            return rolls[0] === 10;
        },

        _isSpare: function(rolls) {
            return add(firstRolls(rolls, 2)) === 10;
        },

        _isLastFrame: function() {
            if (this.frames.length > 0) {
                if (last(this.frames).number === 9) {
                    return true;
                }
                return false;
            }
            return false;
        },

        _frame: function(rolls) {
            this.frames.push(this._createFrame(rolls));
        },

        _createFrame: function(rolls) {
            return new Frame(rolls, this._frameScore(rolls), this._frameNumber());
        },

        _frameScore: function(rolls) {
            if (this.frames.length === 0) {
                return add(rolls);
            }
            return last(this.frames).accumulatedScore + add(rolls);
        },

        _frameNumber: function() {
           if (this.frames.length === 0) {
                return 1;
            }
            return last(this.frames).number + 1;
        }
    };

    exports.Score = Score;
})(this);
