'use strict';

var Bowling = function() {
  this.allFrames = [];
  this.frame = 0;
};

Bowling.prototype = {
  score: function(scores) {
    this.createAllFramesArray(scores);
    return this.total(this.allFrames);
  },

  createAllFramesArray: function(scores) {
    while (this.allFrames.length < 10) {
      if (scores[0] === 10) {
        this.getStrike(scores);
      } else if (scores[0] + scores[1] === 10){
        this.getSpare(scores);
      } else {
        this.frame = scores.splice(0,2);
      }
      this.addFrameToAllFramesArray();
    }
  },

  getStrike: function(scores) {
    this.frame = scores.splice(0, 1);
    this.frame.push(scores[0], scores[1]);
  },

  getSpare: function(scores) {
    this.frame = scores.splice(0,2);
    this.frame.push(scores[0]);
  },

  addFrameToAllFramesArray: function() {
    this.allFrames.push(this.total(this.frame));
    this.frame = 0;
  },

  total: function(arr) {
    arr = arr.reduce(function (acc, curr) {
      return acc + curr;
    });
    return arr;
  },
}
