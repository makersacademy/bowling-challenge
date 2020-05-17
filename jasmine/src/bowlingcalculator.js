'use strict';

class BowlingCalculator {

  constructor() {
    this.DEFAULT_PINS = 0;
    this.pins = this.DEFAULT_PINS;
    this.strike = 10;
    this.spare = 10; //over two
    this.roll = "x";
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

  reset(){
    return this.pins = this.DEFAULT_PINS;
  }

  }
