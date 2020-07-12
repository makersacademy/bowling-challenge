class Game {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    var result = 0;
    var rollIndex = 0;
    var game = this;

    for (var frame = 0; frame < 10; frame++) {
      if (isStrike()) {
        result += getStrikeScore();
        rollIndex++;
      }
      else if (isSpare()) {
        result += getSpareScore();
        rollIndex += 2;
      }
      else {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1]; 
        rollIndex += 2;
      };
    }
    return result;

    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
    }

    function isStrike() {
      return game.rolls[rollIndex] === 10;
    }

    function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getStrikeScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }


  }
}


