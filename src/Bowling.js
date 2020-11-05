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
    return this.rollScore.reduce((a, b) => a + b, 0)
  };

  currentScore() {
    this.result = 0;
    this.index = 0;

    this.rollScore.forEach(roll => {
      this.result += this.frameScore()
      this.index += 2
    });
  };

  frameScore() {
    return this.rollScore[this.index] + this.rollScore[this.index + 1];
  };

  strikeScore() {
    return 10 + this.rollScore[this.index +1] + this.rollScore[this.index +2]
  };

  // SPARE
  isSpare() {
    this.rollScore[this.index] + this.rollScore[this.index + 1] === 10;
  };

  spareScore() {
    return 10 + this.rollScore[this.index +1];
  };
////////////////////////////////////////////////////////////////////////////////////////////////


};