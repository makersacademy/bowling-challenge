class BowlingScore {
  constructor() {
    this.score = [];
    this.index = 0;
  }

  roll(pins) {
    this.score.push(pins);
  }

  totalScore() {
    let total = 0;
    for(i = 1; i <= 10; i++) {
      if(this.isStrike()) {
        total += (this.score[this.index] + this.score[this.index + 1] + this.score[this.index + 2]);
        this.index++;
      } else if(this.isSpare()) {
        total += (this.score[this.index] + this.score[this.index + 1] + this.score[this.index + 2]);
        this.index += 2;
      } else {
        total += this.score[this.index] + this.score[this.index + 1];
        this.index += 2;
      }
      if(this.score[this.index] == 1) {
      }
    }
    
    return total;
  }

  isStrike() {
    return(this.score[this.index] == 10);
  }

  isSpare() {
    return((this.score[this.index] + this.score[this.index + 1]) === 10);
  }
}