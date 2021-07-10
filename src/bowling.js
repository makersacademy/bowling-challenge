'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
    this.frameScore = [];
  };

  frame(first, second = 'strike') {
    if (second === 'strike') {
      this.rolls.push({first: first});
    } else {
    this.rolls.push({first: first, second: second})
    };
  };

  tenthFrame(first, second, third = 'no strike or spare') {
    if (third === 'no strike or spare') {
      this.rolls.push({first: first, second: second});
    } else {
      this.rolls.push({first: first, second: second, third: third});
    };
  };

  scoreFrame(frame) {
    this.frameScore.push(this.rolls[frame - 1]['first'] + this.rolls[frame - 1]['second']);
  }

};
