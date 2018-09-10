'use strict';

function Scorecard() {
	this.frames = []
};

Scorecard.prototype = {
  addFrame: function(frame) {
    this.frames.push(frame);
  },
  isFinalFrame: function() {
    return this.frames.length === 9
  },
  finalScore: function() {
    var score = 0;     
    this.frames.forEach(function(frame) {
      score += frame.score; 
    });
    return score;
  }
};
