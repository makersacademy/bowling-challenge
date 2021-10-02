'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    if (pins === 10) {
      this.rolls.push([pins, 0])
    } else if (this.rolls.length === 0 || this.rolls[this.rolls.length - 1].length === 2) {
      this.rolls.push([pins])
    } else if (this.rolls[this.rolls.length - 1].length == 1) {
      this.rolls[this.rolls.length - 1].push(pins);
    }
  }

  score() {
    let total = [];

    for (let i = 0; i < this.rolls.length; i++) {
      if (this.rolls[i].reduce((pv, cv) => pv + cv, 0) === 10) {
        total.push(this.rolls[i].reduce((pv, cv) => pv + cv, 0) + this.rolls[i+1][0]);
      } else {
        total.push(this.rolls[i].reduce((pv, cv) => pv + cv, 0));
      }
    }
    
    return total.flat().reduce((pv, cv) => pv + cv, 0);
  }

}
