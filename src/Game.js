'use strict';

class Game {

  constructor(){
    this.frameScores = [];
    this.frames = [];
    this.score = new Score();
  }

  updateFramesArray(frame){
    this.frames.push(frame);
  };

  updateFrameScores(frameScore){
    this.frameScores.push(frameScore);
  };

  strike(frame) {
    if (frame[0] === 10) {
      return true;
    };
  }

  spare(frame) {
    if (!this.strike(frame) && (frame.reduce((a,b) => a + b, 0) === 10)) {
      return true;
    }
  };

  bonusRoll(frame) {
    if (this.strike(frame) || this.spare(frame)) {
      return true;
    };
  };

  checkPreviousFrame(frame) {
    let previousFrame = this.frames[frame - 1];
    if (this.strike(previousFrame)) {
      return "strike";
    } else if (this.spare(previousFrame)) {
      return "spare";
    };
  };

  calculateFinalScore(frame) {
    let extraScore;
    let previousScore = this.frameScores[frame-1];

    if (this.checkPreviousFrame(frame) === "strike") {
      extraScore = this.frames[frame].reduce((a,b) => a + b, 0);
    } else if (this.checkPreviousFrame(frame) === "spare") {
      extraScore = this.frames[frame][0];
    }
    return extraScore + previousScore;
  }

  updatePreviousScore(frame) {
    let finalScore = this.calculateFinalScore(frame);
    let currentScore = this.frames[frame].reduce((a,b) => a + b, 0);
    if (this.checkPreviousFrame(frame) === "strike") {
      this.frameScores[frame - 1] = finalScore;
      this.updateFrameScores(finalScore + currentScore);
    } else if (this.checkPreviousFrame(frame) === "spare") {
      this.frameScores[frame - 1] = finalScore;
      this.updateFrameScores(finalScore + currentScore);
    };
  };

}