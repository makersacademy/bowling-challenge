'use strict';

(function(exports) {
    var Validator = function() {
        this._numberOfFrames = 0;
        this.frameBuilder = new FrameBuilder();
    };

    Validator.prototype = {
        validate: function(rolls) {
            return this._validateScores(rolls) && this._validateFrames(rolls);
        },

        resetFrames: function(rolls) {
            this._numberOfFrames = 0;
        },

        _validateScores: function(rolls) {
            for(let i = 0; i <= rolls.length; i++) {
                if (rolls[i] > 10) {
                    return false;
                }
            }
            return true;
        },

        _validateFrames: function(rolls) {
            var firstFrame;

            if (this._numberOfFrames === 9) {
                this._buildFrame(rolls, rolls, this._numberOfFrames);
                return this._validateLastFrame(rolls)
            }

            if (this._isStrike(rolls)) {
                firstFrame = firstRolls(rolls, 1);
                this._buildFrame(firstFrame, firstRolls(rolls, 3));
            } else if (this._isSpare(rolls)) {
                firstFrame = firstRolls(rolls, 2);
                this._buildFrame(firstFrame, firstRolls(rolls, 3));
            } else {
                firstFrame = firstRolls(rolls, 2);
                this._buildFrame(firstFrame, firstRolls(rolls, 2));
            }

            return this._validateFrame(firstFrame) && this._validateFrames(removeRolls(rolls, firstFrame.length));
        },

        _validateSize: function() {
            return this._numberOfFrames === 10;
        },

        _validateFrame: function(frameRolls) {
            return add(frameRolls) <= 10;
        },

        _validateLastFrame: function(frameRolls) {
            return (frameRolls[0] === 10 || add(firstRolls(frameRolls, 2)) === 10 || (frameRolls.length === 2 && add(frameRolls) < 10)) && frameRolls.length < 4; 
        },

        _buildFrame: function(frameRolls, scoringRolls) {
            this._numberOfFrames++;
            this.frameBuilder._buildFrame(frameRolls, scoringRolls, this._numberOfFrames);
            return;
        },

        _isStrike: function(rolls) {
            return rolls[0] === 10;
        },

        _isSpare: function(rolls) {
            return add(firstRolls(rolls, 2)) === 10;
        }
    }
    exports.Validator = Validator;
})(this);
