class BowlingGame {
  constructor(rollList = []) {
    this.rollList = rollList;
  }

  roll(pins) {
    this.rollList.push(pins);
  }
}

const game = new BowlingGame();
console.log(game.rollList);
game.roll(8);
game.roll(1);
game.roll(3);
console.log(game.rollList);

const gameTwo = new BowlingGame([2, 3, 4]);
console.log(gameTwo.rollList);

module.exports = BowlingGame;
