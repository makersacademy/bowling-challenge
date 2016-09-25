/* jshint -W117 */

BowlingGame = function() { 'use strict';
  this.frames = [];
}

BowlingGame.prototype = {
  roll: function(rolls) {
    if (this.isOver()) {
      throw new Error ('No frames remaining');
    }
    this.frames.push(new Frame(rolls));
  },
  score: function() {
    return this.frames.reduce(
      function(total, frame, i, frames) {
        return total + frame.totalScore(frames[i+1], frames[i+2]);
    }, 0);
  },
  isOver: function() {
    return this.frames.length >= 10;
  }
}
