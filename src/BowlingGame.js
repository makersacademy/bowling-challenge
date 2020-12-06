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
        if (isStrike()) {
          result += getStrikeScore()
          rollIndex += 1
        } else if (isSpare()) {
          result += getSpareScore()
          rollIndex += 2
        } else {
          result += getFrameScore()
          rollIndex += 2
        }
      }
    return result;

    function isStrike() {
      return game.rolls[rollIndex] === 10;
    }

    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex+1] === 10;
    }

    function getStrikeScore () {
      return 10 + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
    }

    function getSpareScore () {
      return 10 + game.rolls[rollIndex+2];
    }

    function getFrameScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex+1]
    }
  }
}
