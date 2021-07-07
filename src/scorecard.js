class Scorecard {
  constructor() {
    this.frameArray = [new Frame(), new Frame()];
  }

  computeScore() {
    this.currentScore = 0;
    this.index = 0;

    this.frameArray.forEach((frame) => {
      this.bonus = 0;
      if (frame.spare() === true) {
        this.bonus = this.frameArray[this.index + 1].bowlOne;
      } else if (frame.strike() === true) {
        this.bonus = this.frameArray[this.index + 1].score();
      }

      this.currentScore += frame.score() + this.bonus;
      this.index += 1;
    });
    return this.currentScore;
  }
}
