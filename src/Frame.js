'use strict';

class Frame {
  constructor() {
    this.pinCount = 10;
    this.rollCount = 0;
    this.roll1 = null;
    this.toll2 = null;
};

receiveRoll(pins) {
  if(this.rollCount === 2) { throw new Error ('Invalid roll!'); };
  if(this.pinCount - pins < 0) { throw new Error ('You are not allowed to roll more than 10 pins per frame!'); };
  this.pinCount -= pins;
  this.rollCount++;
  if(this.roll1 === null) { this.roll1 = pins; }
  else { this.roll2 = pins; }
};

isSpare() {
  if(this.pinCount === 0 && this.roll2 !== null ) { return true };
};



};