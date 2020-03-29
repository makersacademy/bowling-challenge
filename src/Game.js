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
      if (spare()) {
        calculateSpareScore();
      } else {
        calculateScore();
      }
    //index increases by 2 as there are 2 rolls per frame
      rollindex += 2;
    }

    return result;

      function spare() {
        return game._rolls[rollindex] + game._rolls[rollindex + 1] == 10;
      }

      function calculateSpareScore() {
        result += game._rolls[rollindex] + game._rolls[rollindex + 1] + game._rolls[rollindex + 2];
      }

      function calculateScore () {
        result += game._rolls[rollindex] + game._rolls[rollindex + 1];
      }
  }



}
