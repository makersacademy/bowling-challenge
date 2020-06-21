'use strict';

class Frame {
  constructor () {
    this.bowlOne = 0;
    this.bowlTwo = 0;
    this.MAX_SCORE = 10;
    this.isStrike = false;
    this.isSpare = false;
    this.score = 0;
  }

  addBowlOneScore(pins) {
    if(pins === this.MAX_SCORE) {
      this.isStrike = true;
    }
    this.bowlOne += pins;
    this.calculateTotal();
  };

  addBowlTwoScore(pins) {
    this.bowlTwo += pins;
    this.calculateTotal();
    if(this.calculateTotal() === 10) {
      this.isSpare = true;
    }
  };

  getMaxScore() {
    return this.MAX_SCORE;
  };

  calculateTotal() {
    return this.bowlOne + this.bowlTwo;
  };

};
