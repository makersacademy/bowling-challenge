/* jshint -W117 */

BowlingGame = function() { 'use strict';
  this.frames = [];
}

BowlingGame.prototype = {
  roll: function(rolls) {
    this.frames.push(new Frame(rolls));
  },
  score: function() {
    return this.frames.reduce(
      function(total, frame, i, frames) {
        return total + frame.totalScore(frames[i+1]);
    }, 0);
  }
}
