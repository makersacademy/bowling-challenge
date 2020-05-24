'use strict';

class ScoreCard {
  constructor() {
    this.frames = [];
    this.gameRolls = [];
    this.score = [];
    this.runner = [];
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

    (this.score.length < 10) && this.score.push(roll1 + roll2);
  }

  updateFrameScore() {
    let size = this.score.length;

    if (this.gameRolls[size - 3] && this.gameRolls[size - 3].length === 1 && this.gameRolls[size - 2].length === 1) {
      this.score[size - 3] += this.gameRolls[size - 1][0];
    }

    if (this.gameRolls[size - 2] && this.gameRolls[size - 2].length === 1) {
      this.score[size - 2] += this.score[size - 1];
    }

    if (this.score[size - 2] === 10) {
      this.score[size - 2] += this.gameRolls[size - 1][0];
    }
  }

  update10thFrame() {
    let size = this.score.length;
    let gameRollsSize = this.gameRolls.length;

    if (this.score[size - 1] && this.gameRolls[gameRollsSize - 3].length == 1) {
      this.score[size - 1] += this.gameRolls[gameRollsSize - 2][0] + this.gameRolls[gameRollsSize - 1][0];
    }

    if (this.gameRolls[gameRollsSize - 2].length !== 1) {
      this.score[size - 1] += this.gameRolls[gameRollsSize - 1][0];
    }
  }

  runningTotal() {
    this.score.reduce((a, b, i) => this.runner[i] = a + b, 0);
    return this.runner;
  }
}
