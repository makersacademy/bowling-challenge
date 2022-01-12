class BowlingGame {
  constructor(rollList = []) {
    this.rollList = rollList;
  }

  roll(pins) {
    return this.rollList.push(pins);
  }

  #isAStrike(i) {
    return this.rollList[i] == 10;
  }

  #isASpare(i) {
    return this.rollList[i] + this.rollList[i + 1] === 10;
  }

  calculateStrikeScore(i) {
    return 10 + this.rollList[i + 1] + this.rollList[i + 2];
  }

  calculateSpareScore(i) {
    return 10 + this.rollList[i + 2];
  }

  calculateBasicScore(i) {
    return this.rollList[i] + this.rollList[i + 1];
  }

  getFinalScore() {
    let sum = 0;
    let rI = 0; // rollList Index
    for (let i = 0; i < 10; i++) {
      if (this.#isAStrike(rI)) {
        // console.log("strike");
        sum += this.calculateStrikeScore(rI);
        rI += 1;
      } else {
        if (this.#isASpare(rI)) {
          // console.log("spare");
          sum += this.calculateSpareScore(rI);
        } else {
          // console.log("neither strike nor spare");
          sum += this.calculateBasicScore(rI);
        }
        rI += 2;
      }
    }
    return sum;
  }
}

const perfectGame = new BowlingGame();

for (i = 0; i < 12; i++) {
  perfectGame.roll(10);
}

console.log(perfectGame.getFinalScore());

module.exports = BowlingGame;
