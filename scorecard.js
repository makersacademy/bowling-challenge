const Game = require("./game");

class Scorecard {
  constructor(game) {
    this.game = game.frames();
    // this.framesWithRolls = game.framesWithRolls();
  }

  scoreByFrame() {
    let frameScores = [];

    this.game.forEach((frame, index) => {
      this.nextIndex = index + 1;
      frameScores.push(frame.sum() + this.#bonusPoints(frame));
    });

    return frameScores;
  }

  totalScore() {
    const sum = this.scoreByFrame().reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }

  addScores(frame) {
    frameScores.push(frame.sum() + bonusPoints(frame));
  }

  #bonusPoints(frame) {
    let bonusPoints = 0;

    if (frame.strike() === true) {
      bonusPoints = this.game[this.nextIndex].sum();
    }
    return bonusPoints;
  }
}

module.exports = Scorecard;
