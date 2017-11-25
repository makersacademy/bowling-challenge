'use strict';

(function(exports) {
    var Game = function() {
        this.score = new Score;
        this.validator = new Validator;
        this.frames;
        this.total;
        this._rolls;
        this.spiritBowlers;
    };

    Game.prototype = {
        compute: function(rolls) {
            if (!(rolls instanceof Array)) {
                return 'Invalid input';
            }
            this._rolls = rolls.slice(0);
            if (this.validator.validate(rolls)) {
                this.validator.resetFrames();
                this.score.plays(this._rolls);
                this.frames = this.score.giveFrames();
                this.total = last(this.frames).accumulatedScore;
                return;
            }
            return 'Invalid input';
        },
    }
    exports.Game = Game;
})(this);
