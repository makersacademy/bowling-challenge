'use strict';

function Score() {
    this._score = 0;
    this.PINS = 10;
}

Score.prototype.calculateScore = function(frames) {
    this._score = 0;
    for(var i = 0; i < frames.length; i++) {
        if((i > 0) && this.isStike(frames[i-1])) {
            this._score += 2 * this.frameScore(frames[i]);
        }
        else if((i > 0) && this.isSpare(frames[i-1])) {
            this._score += frames[i].throws[0];
            this._score += this.frameScore(frames[i]);
        }
        else {
            this._score += this.frameScore(frames[i]);
        }
    }
    return this._score;
};

Score.prototype.isStike = function(frame) {
    return (frame.throws.length === 1) && (frame.pinsStanding() === 0);
};

Score.prototype.isSpare = function(frame) {
    return (frame.throws.length === 2) && (frame.pinsStanding() === 0);
};

Score.prototype.frameScore = function(frame) {
    return this.PINS - frame.pinsStanding();
};
