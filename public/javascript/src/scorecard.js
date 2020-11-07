'use strict';

class Scorecard{

  constructor(frameClass = Frame){
    this.frames = [];
    var firstFrame = this._frameMaker();
    firstFrame.number = 1;
    this._framePusher(firstFrame);
  }

  _frameMaker(frameClass = Frame){
    return new Frame;
  }

  _framePusher(frame){
    this.frames.push(frame);
  }

  roll(currentFrame = this.frames[-1], pins){
    console.log(currentFrame);
    currentFrame.recordRoll(pins);
  }

  calculateScore(frames = this.frames){
    var score = 0;
    frames.forEach(frame => {
      score += frame.score();
    });
    return score;
  }
}
