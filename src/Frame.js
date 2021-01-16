'use strict';

class Frame {
  constructor() {
    this._MAX_SCORE = 10;
    this.pinBoard = [];
    this.firstRoll;
    this.secondRoll;
  };

  updatePinBoard(roll) {
    this.pinBoard.push(roll);
  }

  checkPinsTotal() {
    if (this.pinsSum() > this._MAX_SCORE){
      throw new Error('the sum of two pins exceeds maximum')
    }
  };

  pinsSum() {
    return (this.firstRoll + this.secondRoll);
  }

  spare() {
    if (!this.strike() && (this.pinBoard.reduce((a,b)=> a + b, 0) === 10)) {
      return true;
    }
  };

  strike() {
    if (this.firstRoll === 10){
      return true;
    }
  }
};