class BowlingGame {
  constructor(rollList = []) {
    this.rollList = rollList;
    this.sum = 0; // easier to access ? like a global var in ruby? I'm planning to have function calculating the score for strike/spare and basic?
  }

  roll(pins) {
    this.rollList.push(pins);
  }

  // calculateSpareScore(i) {
  //   return (this.sum += 10 + rolls[i + 2]);
  // }

  // calculateBasicScore(i) {
  //   return (this.sum += rolls[i] + rolls[i + 1]);
  // }

  getFinalScore() {
    let rI = 0;

    for (let i = 0; i < 10; i++) {
      // console.log(`${this.rollList[rI]}`);
      if (this.rollList[rI] == 10) {
        // console.log("if strike");
        this.sum +=
          this.rollList[rI] + this.rollList[rI + 1] + this.rollList[rI + 2];
        rI += 1;
        // console.log(`${this.rollList[rI]}`);
      } else {
        if (this.rollList[rI] + this.rollList[rI + 1] == 10) {
          // console.log("if spare");
          this.sum += 10 + this.rollList[rI + 2];
          rI += 2;
        } else {
          // console.log("if not spare");
          this.sum += this.rollList[rI] + this.rollList[rI + 1];
          // console.log(`${this.rollList[rI]}`);
          rI += 2;
        }

        // console.log(this.sum);
      }
    }
    // console.log(this.sum);
    return this.sum;
  }
}

const game = new BowlingGame();
game.roll(10);
game.roll(1);
game.roll(1);
for (i = 0; i < 16; i++) {
  game.roll(0);
}
console.log(game.rollList);
console.log(game.getFinalScore());

module.exports = BowlingGame;
