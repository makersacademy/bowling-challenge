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

  updatePreviousScore(frame) {
    let finalScore = this._calculateFinalScore(frame);

    let currentScore = this._calculateCurrentScore(frame);

    if (this._checkPreviousFrame(frame) === "strike" || 
        this._checkPreviousFrame(frame) === "spare") {
      
      this.frameScores[frame - 1] = finalScore;
    }
    this.updateFrameScores(finalScore + currentScore);

  };

  _checkPreviousFrame(frame) {
    let previousFrame = this.frames[frame - 1];
    if (this.strike(previousFrame)) {
      return "strike";
    } else if (this.spare(previousFrame)) {
      return "spare";
    } 
  };

  _calculateCurrentScore(frame) {
    return this.frames[frame].reduce((a,b) => a + b, 0)
  }

  _calculateFinalScore(frame) {
    let extraScore;
    let previousScore = this.frameScores[frame-1];

    if (this._checkPreviousFrame(frame) === "strike") {
      extraScore = this._calculateCurrentScore(frame);
    } else if (this._checkPreviousFrame(frame) === "spare") {
      extraScore = this.frames[frame][0];
    } else {
      extraScore = 0;
    }
    return extraScore + previousScore;
  }
}