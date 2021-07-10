'use strict';

class Bowling {
  constructor() {
    this.rolls = []
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

};
