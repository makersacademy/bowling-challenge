'use strict';

function Scorecard() {
    this.frames = [];
    this.currentScore = 0;
};

Scorecard.prototype.getFrames = function() {
    return this.frames;
};
Scorecard.prototype.addFrame = function(frame) {
    this.frames.push(frame);
};
Scorecard.prototype.getCurrentScore = function() {
    this.updateCurrentScore();
    return this.currentScore
};
Scorecard.prototype.updateCurrentScore = function() {
    this.currentScore = 0;
    for (var i = 1; i <= this.frames.length; i++) {
        this.currentScore += this.getFrameScore(i);
    };
};
Scorecard.prototype.getFrameScore = function(frameNumber) {
    return this.frames[(frameNumber - 1)].getRolls().reduce(function(acc, val) { return acc + val; }, 0);
};
