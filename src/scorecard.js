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
  score: function() {
    var score = 0;     
    var self = this;
    
    this.frames.forEach(function(frame, i) {
      score += frame.score;
      if (frame.score === 10 ) {
        score += self.getBonusScore(i)
      }
    });
    return score;
  },
  getBonusScore: function(i) {
    var bonus = 0;

    bonus = this.frames[i+1].rolls[1]
    if (this.frames[i].isStrike) {
      if (this.frames[i+1].isStrike && i != 8) {
        bonus += this.frames[i+2].rolls[1]
      } else bonus += this.frames[i+1].rolls[2]
      }
      if (this.frames[i].rolls.length === 4) {
        bonus += this.frames[9].rolls[3]
      }
    return bonus;
    }
};
