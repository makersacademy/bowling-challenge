'use strict';

var Bowling = function() {
  this.allFrames = [];
  this.frame = 0;
};

Bowling.prototype = {
  score: function(balls) {
    this.createAllFramesArray(balls);
    return this.calculateTotal();
  },

  createAllFramesArray: function(balls) {
    while (this.allFrames.length < 10) {
      if (balls[0] === 10) {
        this.calculateStrike(balls);
      } else if (balls[0] + balls[1] === 10){
        this.calculateSpare(balls);
      } else {
        this.frame = balls.splice(0,2);
      }
      this.addFrameToAllFramesArray();
    }
  },

  calculateStrike: function(balls) {
    this.frame = balls.splice(0, 1);
    this.frame.push(balls[0], balls[1]);
  },

  calculateSpare: function(balls) {
    this.frame = balls.splice(0,2);
    this.frame.push(balls[0]);
  },

  addFrameToAllFramesArray: function() {
    this.allFrames.push(this.frame);
    this.frame = 0;
  },

  calculateTotal: function() {
    var total = 0;
    this.allFrames.forEach(function(frame) {
      frame = frame.reduce(function (acc, curr) {
        return acc + curr;
      });
      total += frame;
    });
    return total;
  }
}
