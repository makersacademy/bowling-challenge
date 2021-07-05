class ScoreCard {
  constructor() {
    this.totalScore = 0;
  }

  score(num) {
    if (num > 10) {
      throw new Error("Invalid Score");
    }
    this.totalScore += num;
  }
}