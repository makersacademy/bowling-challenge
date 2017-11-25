'use strict';

(function(exports) {
    var Game = function(rolls) {
        this.score = new Score;
        this.validator = new Validator;
        this.frames;
        this._numberOfFrames = 0;
        this.spiritBowlers;
    };

    Game.prototype = {
        compute: function(rolls) {
        if (this.validator.validate(rolls)) {
            this.validator.resetFrames();
            this.score.plays(rolls);
            return this.frames = this.score.giveFrames;
        }
        return 'Nice one, jQuery...';
        },
    }
    exports.Game = Game;
})(this);
