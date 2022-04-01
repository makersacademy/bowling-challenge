// import Frame from './frame.js';

export default class ScoreCard {
  constructor() {
    this.frames = [];
    this.isStrike = false;
    this.isSpare = false;
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

  saveStrike(frame) {
    if (frame.firstRoll === 10) {
      this.isStrike = true;
    } else {
      this.isStrike = false;
    }
  }

  saveSpare(frame) {
    if (frame.frameTotalScore === 10 && frame.firstRoll < 10) {
      this.isSpare = true;
    } else {
      this.isSpare = false;
    }
  }
}
