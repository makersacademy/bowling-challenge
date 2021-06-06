class BowlingScore {
  constructor() {
    this.score = [];
  }

  roll(pins) {
    this.score.push(pins);
  }

  totalScore() {
    let total = 0;
    let index = 0;
    for(i = 1; i <= 20; i++) {
      total += this.score[index];
      index++;
    }
    return total;
  }
}