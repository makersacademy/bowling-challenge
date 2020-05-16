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
    this.scores.push(this.frames[0].total());
    return this.scores;
  }
}
