'use strict';

function Scorecard() {
this.scores = Array(10).fill(0).map( x => Array(5).fill(0));
this.frame = 1
this.roll = 1
this.total = 0
}
// This is the general method called to update a frame scores
//
Scorecard.prototype.updateScore = function(frame, roll, pins) {
    this.scores[frame-1][roll] = pins;
    this.isStrike (frame, roll, pins);
    this.isSpare (frame, roll, pins);
}
// Index 0 of array set to 1 if frame is a Strike
Scorecard.prototype.isStrike = function (frame, roll, pins) {
    if (roll === 1 && pins === 10) {
        this.scores[frame-1][0] = 1};
    if (frame === 10 && roll === 2 && pins === 10) {
        this.scores[frame-1][0] = 1};
}
// Index 4 of array set to 1 if frame is a Spare
Scorecard.prototype.isSpare = function (frame, roll, pins) {
    if (roll === 2 && this.scores[frame-1][0] === 0) {
        if (this.scores[frame-1][1] + this.scores[frame-1][2] == 10) {
            this.scores[frame-1][4] = 1};
        }
}

Scorecard.prototype.totalScore = function () {
  // Needing work here on the score function!
  var num1 = 0, num2 = 0;
  



  console.log(num1);
  console.log(JSON.stringify(score.scores));
}
