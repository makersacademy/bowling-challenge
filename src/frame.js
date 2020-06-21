'use strict';

class Frame {
  constructor () {
    this.bowlOne = 0;
    this.bowlTwo = 0;
    this.MAX_SCORE = 10;  }

  addBowlOneScore(pins) {
    this.bowlOne = pins;
  }

  addBowlTwoScore(pins) {
    this.bowlTwo = pins;
  }

  getMaxScore() {
    return this.MAX_SCORE;
  };

  total() {
    return this.bowlOne + this.bowlTwo;
  };

  isAStrike() {
    if(this.bowlOne === this.MAX_SCORE) {
      return true;
    } else { 
      return false; 
    }
  }

  isASpare() {
    if(this.bowlOne + this.bowlTwo === this.MAX_SCORE) {
      return true;
    } else {
      return false;
    }
  }

};
