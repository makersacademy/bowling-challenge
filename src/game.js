'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.gameRolls = [];
    this.score = [];
  }

  addToFrames(frame) {
    this.frames.push(frame);
  }

  setRolls() {
    let frameScore = this.frames.slice(-1)[0].rolls;

    this.gameRolls.push(frameScore);
  }

  setScore() {
    let size = this.gameRolls.length;
    let roll1 = this.gameRolls[size - 1][0];
    let roll2 = this.gameRolls[size - 1].length === 2 ? this.gameRolls[size - 1][1] : 0;

    this.score.push(roll1 + roll2);
  }

  getScore() {
    return this.score;
  }

  updateFrameScore() {
    let size = this.score.length;

    if (this.gameRolls[size - 2].length === 1) {
      this.score[size - 2] += this.score[size - 1];
    }

    if (this.score[size - 2] === 10) {
      this.score[size - 2] += this.gameRolls[size - 1][0];
    }
  }
}
