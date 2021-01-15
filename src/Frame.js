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
    if ((this.firstRoll + this.secondRoll) > this._MAX_SCORE){
      throw new Error('the sum of two pins exceeds maximum')
    }
  };

  pinsSum() {
    
  }

  // strike() {
  //   if ((this.pinBoard.reduce((a,b)=> a + b, 0)) {

  //   }
  // };
};