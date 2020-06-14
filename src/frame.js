'use strict';
class Frame {
  constructor() {
    this.scores = [];
    this.frameScore = 0;
  }

  add(num) {
    this.scores.push(num);
    this.frameScore += num
  }

  total() {
    return this.frameScore
  }

  strike() {
    if (this.scores[0] === 10) {
      return true;
    };
  }

  spare() {
    if (this.scores.length > 1 && this.scores[0] + this.scores[1] === 10) {
      return true;
    } else {
      return false;
    }
  }

}