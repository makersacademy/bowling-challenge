'use strict';

function Scorecard() {
this.scores = Array(10).fill(0).map( x => Array(3).fill(0));
this.frame = 1
this.roll = 1
}

Scorecard.prototype.updateScore = function(frame, roll, pins) {
  this.scores[frame-1][roll-1] = pins;
}
