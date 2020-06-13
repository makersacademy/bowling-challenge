'use strict';

class Frame {
  constructor(bowlOne, bowlTwo) {
    this.MAX_SCORE = 10;
    this.bowlOne = bowlOne;
    this.bowlTwo = bowlTwo;
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
