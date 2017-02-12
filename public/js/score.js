'use strict';

function Score() {
    this._score = 0;
    this.PINS = 10;
}

Score.prototype.calculateScore = function(frames) {
    this._score = 0;
    for(var i = 0; i < (frames.length); i++) {
        if(this.isLastFrame(i)) { break; }
        if(this.isNotFirstFrame(i) && this.isStike(frames[i-1])) {
            this.strikeScore(frames[i]);
        }
        else if(this.isNotFirstFrame(i) && this.isSpare(frames[i-1])) {
            this.spareScore(frames[i]);
        }
        else {
            this._score += this.frameScore(frames[i]);
        }
    }
    if(frames.length === 10) {
        var lastFrame = frames[9];
        for(var i = 0; i < (lastFrame.throws.length); i++) {
            this._score += lastFrame.throws[i];
        }
    }
    return this._score;
};

Score.prototype.isStike = function(frame) {
    return (frame.throws.length === 1) && (frame.pinsStanding() === 0);
};

Score.prototype.strikeScore = function(frame) {
    this._score += 2 * this.frameScore(frame);
};

Score.prototype.isSpare = function(frame) {
    return (frame.throws.length === 2) && (frame.pinsStanding() === 0);
};

Score.prototype.spareScore = function(frame) {
    this._score += (frame.throws[0] + this.frameScore(frame));
};

Score.prototype.frameScore = function(frame) {
    return this.PINS - frame.pinsStanding();
};

Score.prototype.isNotFirstFrame = function(i) {
    return i > 0;
};

Score.prototype.isLastFrame = function(i) {
    return i === 9;
};