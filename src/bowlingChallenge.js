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
    for(i = 1; i <= 10; i++) {
      if(this.isStrike(index)) {
        total += (this.score[index] + this.score[index + 1] + this.score[index + 2]);
        index++;
      } else {
        total += this.score[index];
        index++;
      }
    }
    return total;
  }

  isStrike(index) {
    return(this.score[index] == 10);
  }
}