class BowlingGame {
  constructor(rollList = []) {
    this.rollList = rollList;
  }

  roll(pins) {
    this.rollList.push(pins);
  }

  getFinalScore() {
    console.log("in function");
    const rolls = this.rollList;
    let sum = 0;
    let rI = 0;
    let frameI = 0;
    for (let i = 0; i < 10; i++) {
      console.log(`${rI}`);
      rI = frameI;
      if (rolls[rI] + rolls[rI + 1] == 10) {
        console.log("in if statement");
        frameI += 2;
        return (sum += 10 + rolls[rI + 2]);
      } else {
        frameI += 2;
        return (sum += rolls[rI] + rolls[rI + 1]);
      }
    }
    return sum;
  }

  calculateSpareScore() {}

  calculateBasicScore() {}
}

const game = new BowlingGame();
game.roll(8);
game.roll(2);
game.roll(3);
console.log(game.rollList);
console.log(game.getFinalScore());

module.exports = BowlingGame;
