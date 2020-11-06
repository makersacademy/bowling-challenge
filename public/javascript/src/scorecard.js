'use strict';

class Scorecard{

  constructor(frameClass = Frame){
    this.frames = [];
    var firstFrame = new frameClass;
    firstFrame.number = 1;
    this.frames.push(firstFrame);
  }

  roll(currentFrame = this.frames[-1], pins){
    console.log(currentFrame);
    currentFrame.recordRoll(pins);
  }
}
