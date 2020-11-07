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

  roll(pins){
    if (this._isNotFinalFrame()) {
      this._frameChecker();
    }
    this.getCurrentFrame().recordRoll(pins);
  }

  calculateScore(frames = this.frames){
    var score = 0;
    frames.forEach(function (frame, index, array) {
      if (typeof array[index+1] !== 'undefined' && array[index+1].contents.length > 1) {
        score += frame.points(array[index+1].contents[0], array[index+1].contents[1]);
      }
      else if (typeof array[index+1] !== 'undefined' && array[index+1].contents.length < 2 && typeof array[index+1] !== 'undefined') {
        score += frame.points(array[index+1].contents[0], array[index+2].contents[0]);
      }
      else {score += frame.points();
      }
      console.log(score)
    });
    return score;
  }

  _frameChecker(){
    if (this.getCurrentFrame().rolls() === 2 || this.getCurrentFrame().isStrike()) {
      this._frameMaker();
    };
  };

  _frameMaker(frameClass = Frame){
    let frame = new frameClass;
    frame.number = this.frames.length +1;
    this.frames.push(frame);
  };

  _isNotFinalFrame(){
    return this.getCurrentFrame().number !== 10;
  }
}
