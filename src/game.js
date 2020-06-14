class Game {
  constructor() {
    this.totalScore = 0;
  }

  currentScore() {
    return this.totalScore;
  }

  addRoll(num) {
    return this.totalScore += num;
  }
};

