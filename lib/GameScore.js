const Frame = require('./frame');

class GameScore {
  constructor(
    frameScores = [],
    frameCounter = 0,
    strikePoints = 10,
    prevRoundStrike = false,
    prevTwoRoundStrike = false
  ) {
    this.frameScores = frameScores;
    this.frameCounter = frameCounter;
    this.prevRoundStrike = prevRoundStrike;
    this.prevTwoRoundStrike = prevTwoRoundStrike;
    this.strikePoints = strikePoints;
  }

  addFrameScore(frame) {
    let points = frame.framePins().reduce((val1, val2) => val1 + val2);
    this.frameScores.push(points);
    this.calculateBonus(frame, points);
    this.frameCounter += 1;
  }

  calculateBonus(frame, points) {
    // Calculates bonus for cases in which there are two or more strikes in a row
    if (this.prevRoundStrike === true && this.prevTwoRoundStrike === true) {
      this.frameScores[this.frameCounter - 2] += frame.framePins()[0];
      this.prevTwoRoundStrike = false;
    }
    // calculates bonus for cases of singular strikes and spares
    if (this.prevRoundStrike === true) {
      this.frameScores[this.frameCounter - 1] += points;
      this.prevTwoRoundStrike = true;
    } else if (this.prevRoundSpare === true) {
      this.frameScores[this.frameCounter - 1] += frame.framePins()[0];
    }

    this.prevRoundStrike = false;
    this.prevRoundSpare = false;
    // Marks a frame as strike or spare to calculate bonus on the next round
    if (frame.isStrike() === true) {
      this.prevRoundStrike = true;
    } else if (frame.isSpare() === true) {
      this.prevRoundSpare = true;
    } //
  }

  calcTotalPoints() {
    return this.frameScores.reduce((val1, val2) => val1 + val2);
  }
}

module.exports = GameScore;
