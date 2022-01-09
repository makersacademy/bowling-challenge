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
    // const rolls = this.rollList;
    let rI = 0;
    let frameI = 0;
    for (let i = 0; i < 10; i++) {
      // rI = frameI;
      if (this.rollList[rI] + this.rollList[rI + 1] == 10) {
        console.log("if spare");
        this.sum += 10 + this.rollList[i + 2];
        rI += 2; // previousliy frameI += 2 and placed two line above because of the return sum etc from line 28 => fix use this.sum
        console.log(this.sum);
      } else {
        console.log("if not spare");
        this.sum += this.rollList[rI] + this.rollList[rI + 1];
        rI += 2; // previousliy frameI += 2 and placed two line above because of the return sum etc from line 33  => fix use this.sum
        console.log(this.sum);
      }
    }
    return this.sum;
  }
}

const game = new BowlingGame();
game.roll(8);
game.roll(2);
game.roll(3);
for (i = 0; i < 19; i++) {
  game.roll(0);
}
console.log(game.rollList);
console.log(game.getFinalScore());

module.exports = BowlingGame;
