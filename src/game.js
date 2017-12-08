'use strict';

(function(exports) {
    var Game = function() {
        this._validator = new Validator;
        this.frames;
        this.total;
        this.spiritBowlers;
    };

    Game.prototype = {
        compute: function(rolls) {
            if (!(rolls instanceof Array)) {
                return 'Invalid input';
            }

            if (this._validator.validate(rolls)) {
                this.frames = this._validator.frameBuilder.giveFrames();
                this._validator.resetFrames();
                this.total = last(this.frames).accumulatedScore;
                return;
            }
            return 'Invalid input';
        },
    }
    exports.Game = Game;
})(this);
