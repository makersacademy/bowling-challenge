'use strict';

class Scorecard{
  constructor() {
    this.frame = [];
    this.score = 0;
  }

  addPins(num) {
    this.frame.push(num)
  }

  calculateTotal() {
    this.score = this.frame.reduce((a, b) => a + b, 0);
    return this.score
  }
};