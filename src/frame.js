'use strict';

class Frame {
  constructor(number) {
    this.round = number;
    this.score = [];
  }

  addRoll(pins) {
    this.score.push(pins);
    return this.score;
  } 

  spareOrStrike() {
    if(this.isSpare()) {
      return 'spare!';
    }
    if(this.isStrike()) {
      return 'strike!';
    }
  }

  isStrike() {
    return this.score[0] === 10 || this.score[1] === 10;
  }

  isSpare() {
    var spare = this.score.slice(0, 2);
    return spare.reduce((a, b) => a + b, 0) === 10;
  }

}