export default class Bowling {
  scorecard: number[][];

  constructor() {
    this.scorecard = [];
  }

  addScore(score: number[]) {
    if (score[0] + score[1] > 10 && score.length === 2) {
      return;
    }

    if (this.scorecard.length === 10) {
      return;
    }

    if (score.length === 3 && this.scorecard.length != 9) {
      return;
    }

    if (score.length === 3 && !(score[0] + score[1] >= 10 || score[0] == 10)) {
      return;
    }

    this.scorecard.push(score);
  }
}