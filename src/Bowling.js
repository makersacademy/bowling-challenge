class Bowling {

  constructor() {
    this.rollScore = [];
    this.index = 0;
    this.result = 0;
  };

  getCurrentRollScore() {
    return this.rollScore;
  };

  getCurrentResult() {
    return this.result;
  };

  roll(pins) {
    this.rollScore.push(pins);
  };

  totalScore() {
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (this.isStrike()) {
        this.result += this.strikeScore();
        this.index += 1
      } else if (this.isSpare()) {
        this.result += this.spareScore();
        this.index += 2
      } else {
        this.result += this.regularScore();
        this.index += 2
      }
    }
    return this.result;
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // STRIKE CHECK AND SCORE
  isStrike() {
    this.rollScore[this.index] === 10;
  };

  strikeScore() {
    return this.rollScore[this.index] + this.rollScore[this.index + 1] + this.rollScore[this.index + 2]
  };

  // SPARE CHECK AND SCORE
  isSpare() {
    this.rollScore[this.index] + this.rollScore[this.index + 1] === 10;
  };

  spareScore() {
    return this.rollScore[this.index] + this.rollScore[this.index + 1];
  };
  //   ////////////////////////////////////////////////////////////////////////////////////////////////

  regularScore() {
    return this.rollScore[this.index] + this.rollScore[this.index + 1];
  }
};