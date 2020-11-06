'use strict';

class Frame{

  constructor(){
    this.contents = [];
    this.points;
  };

  recordRoll(pins){
    this.contents.push(pins)
  };

  points(_reducer){
    this.points = this.contents.reduce((a, b) => a + b, 0);
    return this.points;
  };


}
