'use strict';

class Frame{

  constructor(){
    this.contents = [];
  };

  recordRoll(pins){
    this.contents.push(pins)
  };

  points(){
    this.points = this.contents.reduce((a, b) => a + b, 0);
    return this.points;
  };

  isStrike(){
    if (this.contents.length === 1 && this.points() === 10){
      return true;
    } else {
      return false;
    }
  };

  isSpare(){
    if (this.contents.length === 2 && this.points() === 10){
      return true;
    } else {
      return false;
    }
  };

}
