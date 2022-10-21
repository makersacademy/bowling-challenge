const Frame = require('./frame');

class GameScore {
  constructor(
    frameScores = [],
    frameCounter = 0,
    prevRoundStrike = false,
    prevTwoRoundStrike = false
  ) {
    this.frameScores = frameScores;
    this.frameCounter = frameCounter;
    this.prevRoundStrike = prevRoundStrike;
    this.prevTwoRoundStrike = prevTwoRoundStrike;
  }

  addFrameScore(frame) {
    let points = frame.framePins().reduce((val1, val2) => val1 + val2);
    this.frameScores.push(points);

    this.calculateBonus(frame, points);
    this.frameCounter += 1;
  }

  calculateBonus(frame, points) {
    if (this.prevRoundStrike === true) {
      this.frameScores[this.frameCounter - 1] += points;
    }
    this.prevRoundStrike = false;

    if (frame.isStrike() === true) {
      this.prevRoundStrike = true;
    }
  }
}

module.exports = GameScore;
