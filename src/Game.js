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
    if (previousFrame.strike()) {
      return true;
    };
  };

  spare(frame) {
    if (!this.strike(frame) && (frame.reduce((a,b) => a + b, 0) === 10)) {
      return true;
    }
  };

  strike(frame) {
    if (frame[0] === 10){
      return true;
    };
  }

  bonusRoll(frame) {
    if (this.strike(frame) || this.spare(frame)){
      return true;
    };
  };

  updatePreviousScore(currentFrameNumber, score){
    if (checkPreviousStrike(currentFrameNumber)) {
      previousFrameScore += this.frameScores[frameNumber]
    } else if (previousFrame.spare()) {
      previousFrameScore += score;
    };
  };

}