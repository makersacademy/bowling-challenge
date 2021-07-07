'use strict';

class BowlingScorecard {
  constructor() {
    this.bowls = []
  }

  bowl(pins) {
    this.bowls.push(pins)
  }

  score() {
    let result = 0;
    let bowlIndex = 0;
    let game = this;
    for(let i = 0; i < 10; i++) {
      if (isStrike()) {
        result += strikeScore();
        bowlIndex++
      } else if (isSpare()) {
        result += spareScore();
        bowlIndex += 2;
      } else {
        result += normScore();
        bowlIndex += 2;
      }
    }
    function isSpare() {
      return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] === 10;
    }
    function spareScore() {
      return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2];
    }
    function isStrike() {
      return game.bowls[bowlIndex] === 10;
    }
    function strikeScore() {
      return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2];
    }
    function normScore() {
      return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1];
    }
    result;
  }

}