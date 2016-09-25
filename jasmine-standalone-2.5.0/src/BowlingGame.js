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
      function(total, frame) {
        return total + frame.totalScore();
    }, 0);
  }
}
