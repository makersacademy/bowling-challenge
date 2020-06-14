class Scorecard {
  constructor() {
    this.frameArray = [new Frame(), new Frame()];
    this.currentScore = 0;
    this.index = 0;
  }

  computeScore() {
  
    this.frameArray.forEach((frame) => {
      this.currentScore += frame.score();

      if (frame.spare() === true) {
        frame.frameScore += this.frameArray[this.index + 1].bowlOne;
      } else if (frame.strike() === true) {
        frame.frameScore += this.frameArray[this.index + 1].score();
      }

      this.index += 1;
    });
  }
}
