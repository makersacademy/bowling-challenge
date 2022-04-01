// import Frame from './frame.js';

export default class ScoreCard {
  constructor() {
    this.frames = [];
  }

  roll(pins) {
    this.frames.push(pins);
  }

  calculateScore() {
    return this.frames.reduce((sum, curr) => sum + curr, 0);
  }

  playBowling(frame) {
    this.frames.push(frame);
    return this.frames.frameTotalScore;
  }
}
