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
}