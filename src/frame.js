'use strict';
class Frame {
  constructor() {
    this.scores = [];
    this.frameScore = 0;
  }

  add(num) {
    this.scores.push(num);
  }

  total() {
    this.frameScore = this.scores.reduce(function(a, b) {
      return a + b;
    });
    return this.frameScore
  }
}