"use strict";

class Frame {

  constructor(){
    this.current_frame = [];
  };


currentFrameScore = function(){
  return this.current_frame;
}

addToFrame = function(pins) {
  this.current_frame.push(pins);
}

total = function() {
  return this.current_frame.reduce((x, y) => x + y);
}

firstBowl = function() {
  return this.current_frame[0];
}

isStrike = function() {
  if(this.current_frame[0] === 10){
    return true;
  }
  else if(this.current_frame[1] === 10){
    return true;
  }
  else return false;
}

isSpare = function() {
  return this.total() === 10;
}

};
