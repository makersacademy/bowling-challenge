'use strict';

class Frame {
  constructor() {
    this.pinCount = 10;
    this.rollCount = 0;
    this.roll1 = null;
    this.roll2 = null;
    this.isFrameTen = false;
};

receiveRoll(pins) {
  while(this.isFrameTen == false);
    if(this.rollCount === 2 ) { 
      throw new Error ('Invalid roll!'); 
    };
    if(this.pinCount - pins < 0) { 
      throw new Error ('You are not allowed to roll more than 10 pins per frame!'); 
    };
    this.pinCount -= pins;
    this.rollCount++;
    
    if(this.roll1 === null) { 
      this.roll1 = pins; }
    else { this.roll2 = pins; };
};

isSpare() {
  if(this.pinCount === 0 && this.roll2 !== null ) { return true };
};

isStrike() {
  if(this.pinCount === 0 && this.roll1 !== null ) { return true };
  if(this.isFrameTen == true && this.pinCount === 0 && this.roll1 !== null ) { throw new Error ('This was your last roll'); };
};


};