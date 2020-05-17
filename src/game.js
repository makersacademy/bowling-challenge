'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.scores = [];
  }

  addToFrames(frame) {
    this.frames.push(frame);
  }

  setScore() {
    let frameScore = this.frames.slice(-1)[0].total();

    this.scores.push(frameScore);
  }

  getScores() {
    return this.scores;
  }

  updatePreviousFrameScore() {
    this.scores[this.scores.length - 2] += this.scores.slice(-1)[0];
  }
}
