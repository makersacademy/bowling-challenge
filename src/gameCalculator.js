'use strict';

var Bowling = function() {
  this.allFrames = [];
  this.frame = 0;
};

// TODO: ADD UNIT TESTING FOR ALL FUNCTIONS!!!!

Bowling.prototype = {
  score: function(scores) {
    this.createAllFramesArray(scores);
    var total = this.sum(this.allFrames);
    this.allFrames = [];
    return total;
  },

  createAllFramesArray: function(scores) {
    while (this.allFrames.length < 10) {
      if (scores[0] === 10) {
        this.buildStrikeFrame(scores);
      } else if (scores[0] + scores[1] === 10){
        this.buildSpareFrame(scores);
      } else {
        this.frame = scores.splice(0,2);
      }
      this.addFrameToAllFramesArray();
    }
  },

  buildStrikeFrame: function(scores) {
    this.frame = scores.splice(0, 1);
    this.frame.push(scores[0], scores[1]);
  },

  buildSpareFrame: function(scores) {
    this.frame = scores.splice(0,2);
    this.frame.push(scores[0]);
  },

  addFrameToAllFramesArray: function() {
    this.allFrames.push(this.sum(this.frame));
    this.frame = 0;
  },

  sum: function(arr) {
    arr = arr.reduce(function (acc, curr) {
      return acc + curr;
    });
    return arr;
  },
}
