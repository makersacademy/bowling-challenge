class BowlingGame{

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
      for (var i = 0; i < 10; i++) {
        if (isSpare()) {
          result += getSpareScore()
        } else {
          result += getFrameScore()
        }
        rollIndex += 2
      }
    return result;
    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex+1] === 10;
    }
    function getSpareScore () {
      return 10 + game.rolls[rollIndex+2];
    }

    function getFrameScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex+1]
    }
  }

}
