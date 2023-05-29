/* eslint-disable require-jsdoc */
// This class represents bowling score calculator.
// it calculates the score frame-by-frame of a bowling game, when given
// an array of frame objects representing the completed frames.

class BowlingScorecard {
  constructor() {
    this.framesToScore = [];
  }

  setFramesToScore(frameArray) {
    this.framesToScore = frameArray;
  }

  calculateTotalScore() {
    // placeholder
  }
};


module.exports = BowlingScorecard;
