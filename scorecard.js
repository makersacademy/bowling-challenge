const Game = require("./game");

class Scorecard {
  constructor(game) {
    this.game = game.frames();
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

  #bonusPoints(frame) {
    this.nextRolls = [];
    let bonusPoints = 0;
    const notFrameTen = this.nextIndex < 10;

    if (frame.strike() && notFrameTen) {
      bonusPoints = this.#nextTwoRolls();
    } else if (frame.spare() && notFrameTen) {
      bonusPoints = this.#nextRoll();
    }

    return bonusPoints;
  }

  #nextTwoRolls() {
    this.#addNextFrame(this.nextIndex);
    this.#addNextFrame(this.nextIndex + 1);

    return this.nextRolls.flat()[0] + this.nextRolls.flat()[1];
  }

  #nextRoll() {
    this.#addNextFrame(this.nextIndex);

    return this.nextRolls.flat()[0];
  }

  #addNextFrame(index) {
    if (index < this.game.length) {
      this.nextRolls.push(this.game[index].scores());
    } else {
      this.nextRolls.push([0]);
    }
  }
}

module.exports = Scorecard;
