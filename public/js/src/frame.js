'use strict';

class Frame {
  constructor(){
    this.currentFrame = [];
    this.finalFrame = false;
  };

  currentFrame(){
    return this.currentFrame;
  };

  addToFrame(pins){
    this._guard(pins);
    this.currentFrame.push(pins);
  };

  _guard(pins) {
    this._isNumber(pins);
    this._isCorrectNumber(pins);
  }

  _isCorrectNumber(pins){
    if (pins > 10) throw new Error("There aren't that many pins!");
    if (this.finalFrame === false && this.firstRoll() + pins > 10) throw new Error("There aren't that many pins!");
  }

  _isNumber(pins){
    if(!Number.isInteger(pins)) throw new Error('Not a number!');
  }

  isFinal(){
    this.finalFrame = true;
  }

  total(){
    let sum;
    sum = this.currentFrame.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    return sum;
  }

  firstRoll(){
    return this.currentFrame[0];
  }

  isSpare(){
    return this.total() === 10;
  }

  isStrike(){
    return this.currentFrame[0] === 10;
  }

  firstTwoRolls(){
    return this.currentFrame[0] + this.currentFrame[1];
  }
}