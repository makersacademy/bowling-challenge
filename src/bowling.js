'use strict'

class Bowling{
  constructor() {
    this.score = [];
  };

  scoring(num) {
    this.score.push(num);
  };

  frame1() {
    return this.score[0] + this.score[1];
  };

  frame2() {
    return this.score[2] + this.score[3];
  };

  frame3() {
    return this.score[4] + this.score[5];
  };

  frame4() {
    return this.score[6] + this.score[7];
  };
};
