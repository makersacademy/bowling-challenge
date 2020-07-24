'use strict'

class Bowling{
  constructor() {
    this.score = [];
  };

  scoring(num) {
    this.score.push(num);
  };

  frame() {
    if(this.score[0] + this.score[1] === 10) {
            return this.score[0] + this.score[1] + this.score[2];
        }
    return this.score[0] + this.score[1];
  };
};
