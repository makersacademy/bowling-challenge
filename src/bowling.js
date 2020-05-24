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
};
