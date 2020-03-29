class Game {

  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    let result = 0;
    let rollindex = 0;
    let game = this;

    for (let frame = 0; frame < 10; frame ++) {
      if (strike()) {
        result += calculateStrikeScore();
        rollindex ++;
      } else if (spare()) {
        result += calculateSpareScore();
        rollindex += 2;
      } else {
        result += calculateScore();
        rollindex += 2;
      }
    }

    return result;

      function spare() {
        return game._rolls[rollindex] + game._rolls[rollindex + 1] == 10;
      }

      function calculateSpareScore() {
        return game._rolls[rollindex] + game._rolls[rollindex + 1] + game._rolls[rollindex + 2];
      }

      function calculateScore () {
        return game._rolls[rollindex] + game._rolls[rollindex + 1];
      }

      function strike() {
        return game._rolls[rollindex] == 10;
      }

      function calculateStrikeScore() {
        return game._rolls[rollindex] + game._rolls[rollindex + 1] + game._rolls[rollindex + 2];
      }
  }
}

module.exports = Game;
