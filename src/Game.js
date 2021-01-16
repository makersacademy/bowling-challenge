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
    let currentScore;
    let previousScore = this.frameScores[this.frames.length - 2];
    console.log(this.frameScores)
    // console.log(previousScore);
    if (this.checkPreviousFrame(frame) === "strike") {
      currentScore = this.frames[frame].reduce((a,b) => a + b, 0);
    } else if (this.checkPreviousFrame(frame) === "spare") {
      currentScore = this.frames[frame][0];
    }
    let finalScore = currentScore + previousScore;
    return finalScore;
  }

  updatePreviousScore(frame) {
    let previousScore = this.frameScores[frame - 1];

    if (this.checkPreviousFrame(frame) === "strike") {
      let currentScore = this.frames[frame].reduce((a,b) => a + b, 0);
      previousScore += currentScore
      this.frameScores[frame - 1] = previousScore;
      this.frameScores.push(previousScore + currentScore);
    } else if (this.checkPreviousFrame(frame) === "spare") {
      let currentScore = this.frames[frame][0]
      previousScore += currentScore
      this.frameScores[frame - 1] = previousScore;
      this.frameScores.push(previousScore + currentScore + this.frames[frame][1]);
    };
  };

}