class Bowling {
  constructor() {
    this.score = 0;
    this.framenumber = 1;
    this.rollscore = [];
    this.rollnumber = 1;
  }

  roll(pins) {
    if (pins === 10) {
      ("Strike");
    } else if (this.rollnumber == 2) {
      this.score += pins;
      this.rollnumber = 1;
    } else {
      this.score += pins;
      console.log(this.score);
      this.rollnumber += 1;
    }
  }

  totalScore() {
    return this.score;
  }
}

module.exports = Bowling;
