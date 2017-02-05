'use strict';

function Score() {
    this._score = 0;
}

Score.prototype.calculateScore = function(frames) {
    for(var i = 0; i < frames.length; i++) {
        this._score += (10 - frames[i].pinsStanding());
    }
    return this._score;
};
