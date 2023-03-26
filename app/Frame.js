class Frame {
  constructor(id) {
    this.id = id;
    this.score = 0; // from throws only
    this.bonusScore = 0; // from bonus points only
    this.totalScore = 0;
    this.scoreThrow1 = 0;
    this.scoreThrow2 = 0;
    this.scoreThrow3 = 0;
    this.spare = false;
    this.strike = false;
  }

  setBonus() {
    if (this.scoreThrow1 === 10) {
      this.strike = true;
    } else if (this.scoreThrow1 + this.scoreThrow2 === 10) {
      this.spare = true;
    }
  }

  // sets score for only this frame's throws, no bonuses
  setScore() {
    this.score = this.scoreThrow1 + this.scoreThrow2 + this.scoreThrow3;
  }

  // awarding of bonus points is done by Scorecard class

  setTotalScore() {
    this.totalScore = this.score + this.bonusScore;
  }
};

module.exports = Frame;
