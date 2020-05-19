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
    let roll1 = this.gameRolls.slice(-1)[0][0];
    let roll2 = this.gameRolls.slice(-1)[0].length === 2 ? this.gameRolls.slice(-1)[0][1] : 0;
    let frameScore = roll1 + roll2;

    this.score.push(frameScore);
  }

  getScore() {
    return this.score;
  }

//   updateFrameScore() {
//     let size = this.scores.length;
//     let frames = this.frames;
//
//     for (let i = 0; i < size; i++) {
//       if (this.scores[i] === 10 && this.scores[i + 1] === 10) {
//         this.scores[i] += this.scores[i + 1] + frames[i + 2].rolls[0];
//       }
//
//       if (this.scores[i] === 10) {
//         this.scores[i] += this.scores[i + 1];
//       }
//     }
//   }
}
