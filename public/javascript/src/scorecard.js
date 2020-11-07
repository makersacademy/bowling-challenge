'use strict';

class Scorecard{

  constructor(frameClass = Frame){
    this.frames = [];
    this._frameMaker(frameClass);
  }

  getCurrentFrame(){
    let lastIndex = this.frames.length -1;
    let currentFrame = this.frames[lastIndex];
    return currentFrame;
  }

  _frameMaker(frameClass = Frame){
    let frame = new frameClass;
    frame.number = this.frames.length +1;
    this.frames.push(frame);
  }

  _frameChecker(){
    if (this.getCurrentFrame().rolls() === 2 || this.getCurrentFrame().isStrike()) {
      this._frameMaker();
    };
  }

  roll(pins){
    this._frameChecker();
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
