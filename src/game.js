'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.scores = [];
  }

  addToFrames(frame) {
    this.frames.push(frame);
  }

  setScores() {
    let frameScore;

    for (let i = 0; i < this.frames.length; i++) {
      frameScore = this.frames[i].total();
      this.scores.push(frameScore);
    }

    return this.scores;
  }
}
