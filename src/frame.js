'use strict';

class Frame {
  constructor(){
      this.frameCounter = 1;
  }

  returnFrameNumber(){
    return this.frameCounter;
  }

  rollOne(first_roll){
    return first_roll
  }

  rollTwo(second_roll){
    return second_roll
  }

  frameNumberCounter(){
    return this.frameCounter += 1;
  }

  islastFrame(){
    if (this.frameNumberCounter() !== 10) {
    return true;
  } else return false;
  }

  currentTotalRegularPoints(){
    return this.rollOne + this.rollTwo;
  }

  points(){
    return this.currentTotalRegularPoints;
  }

};
