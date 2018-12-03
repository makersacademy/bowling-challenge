'use strict';

function Scorecard() {
this.scores = Array(10).fill(0).map( x => Array(5).fill(0));
this.frame = 1
this.roll = 1
}

Scorecard.prototype.updateScore = function(frame, roll, pins) {
    this.scores[frame-1][roll] = pins;
    this.isStrike (frame, roll, pins);
    this.isSpare (frame, roll, pins);
}

Scorecard.prototype.isStrike = function (frame, roll, pins) {
    if (roll === 1 && pins === 10) {
        this.scores[frame-1][0] = 1};
    if (frame === 10 && roll === 2 && pins === 10) {
        this.scores[frame-1][0] = 1};
  }

Scorecard.prototype.isSpare = function (frame, roll, pins) {
    if (roll === 2 && this.scores[frame-1][0] === 0) {
        if (this.scores[frame-1][1] + this.scores[frame-1][2] == 10) {
            this.scores[frame-1][4] = 1};
        }
    }
