'use strict';

class Bowling{
  constructor(){
    this.rolls = []
  }
  roll(score) {
    this.rolls.push(score);
  };
  totalScore() {
    return this.rolls.reduce((a, b) => a + b, 0)
  };
};

