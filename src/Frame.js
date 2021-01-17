'use strict';

class Frame {
  constructor() {
    this._MAX_SCORE = 10;
    this.pinBoard = [];
    this.firstRoll;
    this.secondRoll;
  };

  checkInput(input) {
    if ((input < 0 || input > 10) || !Number.isInteger(input)) {
      throw new Error('Invalid input');
    };
  };

  checkPinsTotal() {
    if (this.pinsSum() > this._MAX_SCORE){
      throw new Error('the sum of two pins exceeds maximum')
    }
  };

  pinsSum() {
    return (this.firstRoll + this.secondRoll);
  }

  updatePinBoard(roll) {
    try {
      this.checkInput(roll);
      this.checkPinsTotal();
      this.pinBoard.push(roll);
    } catch (error) {
      alert('Invalid input');
    }
  }
};