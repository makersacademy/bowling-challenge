import Frame from './frame.js';

export default class ScoreCard {
  constructor() {
    this.frames = [];
    this.isStrike = false;
    this.isSpare = false;
    this.turn = 0;
  }

  calculateScore() {
    return this.frames.reduce((sum, frame) => sum + frame.frameTotalScore, 0);
  }

  playBowling(frame) {
    this.turn += 1;
    this.saveStrike(frame);
    this.saveSpare(frame);
    this.frames.push(frame);
    return this.calculateScore();
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
