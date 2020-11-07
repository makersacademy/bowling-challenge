'use strict';

class Scorecard{

  constructor(frameClass = Frame){
    this.frames = [];
    var firstFrame = this._frameMaker(frameClass);
    firstFrame.number = 1;
    this._framePusher(firstFrame);
  }

  getCurrentFrame(){
    let lastIndex = this.frames.length -1;
    let currentFrame = this.frames[lastIndex];
    return currentFrame;
  }

  _frameMaker(frameClass = Frame){
    return new frameClass;
  }

  _framePusher(frame){
    this.frames.push(frame);
  }

  roll(pins){
    console.log(this.getCurrentFrame());
    this.getCurrentFrame().recordRoll(pins);
  }

  calculateScore(frames = this.frames){
    var score = 0;
    frames.forEach(frame => {
      score += frame.points();
    });
    return score;
  }
}
