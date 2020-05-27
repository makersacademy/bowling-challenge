'use strict';

class Roll {

  constructor() {
    this.DEFAULT_PINS = 0;
    this.pins = this.DEFAULT_PINS;
    this.strike = 10;
    this.spare = 10;
  }

  getCurrentPins(){
  return this.pins;
  }

  showStrike(){
    return this.strike;
  }

  up(){
    if (this.pins === this.strike) {
  return;
    }

    this.pins++;
  }

  down(){
    if (this.pins === this.DEFAULT_PINS) {
  return;
   }
    this.pins--;
  }

  reset(score, roll_1){
    score = []
    roll_1.pins = score.length
    return roll_1.pins;
  }

  limit(roll_1, roll_2){
    let limit = (10 - roll_1.pins);
    if (roll_2.pins < limit) {
    roll_2.up();
    }
   }
  }
