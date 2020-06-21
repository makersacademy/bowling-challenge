'use strict';

class Frame {
  constructor () {
    this.bowlOne = 0;
    this.bowlTwo = 0;
    this.MAX_SCORE = 10;
    this.isStrike = false;
    this.isSpare = false;
    this.score;
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

  isAStrike() {
    if(this.bowlOne === this.MAX_SCORE) {
      this.isStrike = true;
    }
  };

  isASpare() {
    if(this.bowlOne + this.bowlTwo === this.MAX_SCORE) {
      this.isSpare = true;
    }
  };

};
