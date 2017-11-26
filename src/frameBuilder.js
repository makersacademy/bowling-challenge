'use strict';

(function(exports) {
    var FrameBuilder = function() {
        this._frames = [];
    };

    FrameBuilder.prototype = {
        giveFrames: function() {
            return this._frames;
        },

        _buildFrame: function(frameRolls, scoringRolls, frameNumber) {
            this._frames.push(new Frame(frameRolls, scoringRolls, this._accumulatedScore(scoringRolls), frameNumber));
        },

        _accumulatedScore: function(rolls) {
            if (this._frames.length === 0) {
                return add(rolls);
            }
            return last(this._frames).accumulatedScore + add(rolls);
        },
    };

    exports.FrameBuilder = FrameBuilder;
})(this);
