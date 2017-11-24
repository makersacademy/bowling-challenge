'use strict';

(function(exports) {
    var Frame = function(rolls, accumulated, number) {
        this.score = this._processScore(rolls);
        this.type = this._processType(rolls);
        this.rolls = this._processRolls(rolls);
        this.accumulatedScore = accumulated;
        this.number = number;
    };

    Frame.prototype = {
        _processScore: function(rolls) {
            return add(rolls);
        },

        _processType: function(rolls) {
            if (rolls[0] === 10) {
                return 'Strike';
            }
            if (this.score === 10) {
                return 'Spare';
            }
            return 'No Bonus';
        },

        _processRolls: function(rolls) {
            if (this.type === 'Strike') {
                return [rolls[0]];
            }
            return firstRolls(rolls, 2);
        }
    };
    
    exports.Frame = Frame;
})(this);