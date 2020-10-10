class Scorecard {

  constructor() {
    this.score = 0;
  };

  getCurrentScore() {
    return this.score;
  };

  addScore(pinsKnockedDown) {
    this.score = this.score + pinsKnockedDown;
  }
};