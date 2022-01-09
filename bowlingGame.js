class BowlingGame {
  constructor(rollList = []) {
    this.rollList = rollList;
    this.sum = 0;
  }

  roll(pins) {
    return this.rollList.push(pins);
  }

  isAStrike(i) {
    return this.rollList[i] == 10;
  }

  isASpare(i) {
    return this.rollList[i] + this.rollList[i + 1] == 10;
  }

  calculateStrikeScore(i) {
    console.log("calculating strike score");
    return (this.sum +=
      this.rollList[i] + this.rollList[i + 1] + this.rollList[i + 2]);
  }

  calculateSpareScore(i) {
    return (this.sum += 10 + this.rollList[i + 2]);
  }

  calculateBasicScore(i) {
    return (this.sum += this.rollList[i] + this.rollList[i + 1]);
  }

  moveToNextFrame(str) {
    return str === "strike" ? 1 : 2;
  }

  getFinalScore() {
    let rI = 0; // rollList Index
    for (let i = 0; i < 10; i++) {
      if (this.isAStrike(rI)) {
        console.log("strike");
        this.calculateStrikeScore(rI);
        // console.log(this.sum);
        rI += this.moveToNextFrame("strike");
      } else {
        if (this.isASpare(rI)) {
          console.log("spare");
          this.calculateSpareScore(rI);
        } else {
          console.log("neither strike nor spare");
          this.calculateBasicScore(rI);
        }
        rI += this.moveToNextFrame("not strike");
      }
    }
    return this.sum;
  }
}

// const perfectGame = new BowlingGame();

// for (i = 0; i < 12; i++) {
//   perfectGame.roll(10);
// }

// console.log(perfectGame.getFinalScore());

module.exports = BowlingGame;
