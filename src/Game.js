'use strict';

class Game {

  constructor(){
    this.frameScores = [];
    this.frames = [];
  }

  updateFramesArray(frame){
    this.frames.push(frame);
  };

  updateFrameScores(frameScore){
    this.frameScores.push(frameScore);
  };

  checkPreviousStrike(currentFrameNumber) {
    const previousFrame = this.frames[currentFrameNumber - 1];
    if (this.strike(previousFrame)) {
      return true;
    };
  };

  spare(frame) {
    if (!this.strike(frame) && (frame.reduce((a,b) => a + b, 0) === 10)) {
      return true;
    }
  };

  strike(frame) {
    if (frame[0] === 10) {
      return true;
    };
  }

  bonusRoll(frame) {
    if (this.strike(frame) || this.spare(frame)) {
      return true;
    };
  };

  updatePreviousScore(currentFrameNumber, score) {
    let previousFrameNumber = currentFrameNumber - 1;
    let previousFrameScore = this.frameScores[previousFrameNumber];
    let previousFrame = this.frames[previousFrameNumber];
    if (this.checkPreviousStrike(currentFrameNumber)) {
      this.frameScores[previousFrameNumber] += this.frameScores[currentFrameNumber];
    } else if (previousFrame.spare()) {
      this.frameScores[previousFrameNumber] += this.frameScores[currentFrameNumber];
    };
  };

}