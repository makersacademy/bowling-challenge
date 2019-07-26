'use strict';

function Scorecard() {
    this.frames = [];
};

Scorecard.prototype.getFrames = function() {
    return this.frames;
};
Scorecard.prototype.addFrame = function(frame) {
    this.frames.push(frame);
};
// Scorecard.prototype.getCurrentScore = function() {
//     this.updateCurrentScore
//     return this.currentScore
// };
// Scorecard.prototype.updateCurrentScore = function() {
//     [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
// }
Scorecard.prototype.getFrameScore = function(frameNumber) {

};