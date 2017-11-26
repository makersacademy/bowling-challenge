'use strict';

(function(exports) {
    var Frame = function(frameRolls, scoringRolls, accumulated, number) {
        this.number = number;
        this.score = add(scoringRolls);
        this.rolls = frameRolls;
        this.accumulatedScore = accumulated;
    };
    
    exports.Frame = Frame;
})(this);