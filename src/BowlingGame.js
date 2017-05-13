/* jshint -W117 */

MAX_FRAMES = 10;

BowlingGame = function() { 'use strict';
  this.frames = [];
  this.gameLength = MAX_FRAMES;
}

BowlingGame.prototype = {
  roll: function(rolls) {
    var frame = new Frame(rolls);
    this.checkGameStatus();
    this.checkRollValid(frame);
    this.frames.push(frame);
  },

  score: function() {
    return this.frames.reduce(
      function(total, frame, i, frames) {
        return total + frame.totalScore(frames[i+1], frames[i+2]);
    }, 0);
  },
  
  checkGameStatus: function() {
    if (this.isOver()) { throw new Error ('No frames remaining'); }
  },

  checkRollValid: function(frame) {
  if (frame.isInvalid()) { throw new Error ('Invalid roll'); }
  },

  isOver: function() {
    return this.frames.length >= this.gameLength;
  }
}
