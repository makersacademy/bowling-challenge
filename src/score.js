'use strict';

(function(exports) {
    var Score = function() {
        this._frames = [];
    };

    Score.prototype = {
        giveFrames: function() {
            return this._frames;
        },

        plays: function(rolls) {
            console.log(rolls);
            if (this._isLastFrame()) {
                return this._frame(rolls);
            }
            if (this._isStrike(rolls)) {
                this._frame(firstRolls(rolls, 3))
                return this.plays(removeRolls(rolls, 1));
            }
            if (this._isSpare(rolls)) {
                this._frame(firstRolls(rolls, 3))
                return this.plays(removeRolls(rolls, 2));
            }
            this._frame(firstRolls(rolls, 2))
            return this.plays(removeRolls(rolls, 2));
        },

        _isStrike: function(rolls) {
            return rolls[0] === 10;
        },

        _isSpare: function(rolls) {
            return add(firstRolls(rolls, 2)) === 10;
        },

        _isLastFrame: function() {
            return this._frames.length === 9;
        },

        _frame: function(rolls) {
            this._frames.push(new Frame(rolls, this._accumulatedScore(rolls), this._frameNumber()));
        },

        _accumulatedScore: function(rolls) {
            if (this._frames.length === 0) {
                return add(rolls);
            }
            return last(this._frames).accumulatedScore + add(rolls);
        },

        _frameNumber: function() {
           return this._frames.length + 1;
        }
    };

    exports.Score = Score;
})(this);
