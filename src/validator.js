'use strict';

(function(exports) {
    var Validator = function() {
        this._numberOfFrames = 0;
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
            if (rolls.length === 0) {
                return this._validateSize();
            }
            var firstFrame = this._getFirstFrame(rolls);
            return this._validateFrame(firstFrame) && this._validateFrames(removeRolls(rolls, firstFrame.length));
        },

        _validateSize: function() {
            return this._numberOfFrames === 10;
        },

        _validateFrame: function(frameRolls) {
            this._numberOfFrames++;
            if (frameRolls.length === 3) {
                return this._validateLastFrame(frameRolls);
            }
            return add(frameRolls) <= 10;
        },

        _validateLastFrame: function(frameRolls) {
            return frameRolls[0] === 10 || add(firstRolls(frameRolls, 2)) === 10; 
        },

        _getFirstFrame: function(rolls) {
            var frameSize = this._getFrameSize(rolls);
            return firstRolls(rolls, frameSize)
        },

        _getFrameSize: function(rolls) {
            if (rolls.length === 3) {
                return 3;
            }
            if (rolls[0] === 10) {
                return 1;
            }
            return 2;
        }
    }
    exports.Validator = Validator;
})(this);
