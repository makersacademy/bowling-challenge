'use strict';

class Frame {
  constructor(){
    this.currentFrame = [];
  };

  currentFrame(){
    return this.currentFrame;
  };

  addToFrame(pins){
    this.currentFrame.push(pins);
  };

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

  isBonusFrame(){
    return this.currentFrame.length === 3;
  }
}