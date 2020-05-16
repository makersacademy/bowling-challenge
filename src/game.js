'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.scores = [];
  }

  addToFrames(frame) {
    this.frames.push(frame);
  }

  score() {
    let frameScore = this.frames[0].total();
    this.scores.push(frameScore);

    return this.scores;
  }
}
