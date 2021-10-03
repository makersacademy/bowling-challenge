class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let result = 0;
    let rollIndex = 0;
    let game = this;

    for (let frame = 0; frame < 10; frame++) {
      if (isSpare()) {
        result += getSpareScore();
      } else {
        result += getNormalScore();
      }
      rollIndex += 2;
    }
    return result;

    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
    }

    function getSpareScore() {
      return (
        game.rolls[rollIndex] +
        game.rolls[rollIndex + 1] +
        game.rolls[rollIndex + 2]
      );
    }

    function getNormalScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
  }
}
