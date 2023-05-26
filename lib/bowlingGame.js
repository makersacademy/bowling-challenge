/* eslint-disable require-jsdoc */
const Frame = require('../lib/Frame');

// Represent a bowling game. Responsible for keeping track of game state.
class BowlingGame {
  constructor(frame = new Frame()) {
    this.scorecard = null; // will be injected later
    this.completedFrames = [];
    this.currentFrame = frame;
  }
  // adds results of bowling roll to current frame
  addRollToFrame(roll) {
    this.currentFrame.addRoll(roll);
  }
  // checks if frame is over
  // if true, then adds ito completedFrames and resets currentFrame
  checkFrameEnd() {
    if (this.currentFrame.isFrameOver()) {
      this.completedFrames.push(this.currentFrame);
      this.currentFrame = new Frame();
    }
  }
  // returns running score, using bowlingScorecard
  getRunningScore() {

  }
  // boolean result, checks if game is over or not
  isGameOver() {

  }
}

module.exports = BowlingGame;
