'use strict'

class Bowling{
  constructor() {
    this.score = [];
  };

  scoring(num) {
    this.score.push(num);
  };

  frame1() {
    return this.score[0] + this.score[1]
  }

  frame2() {
    return this.score[2] + this.score[3]
  }
};
