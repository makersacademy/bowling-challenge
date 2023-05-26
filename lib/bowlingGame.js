/* eslint-disable require-jsdoc */
// Represent a bowling game. Responsible for keeping track of game state.

class BowlingGame {
  constructor() {
    this.scorecard = null // will be injected later
    this.completedFrames = []
    this.currentFrame = null // will be injected later 
  }
  // adds results of bowling roll to current frame
  rollResult() {

  }
  // checks if frame is over
  // if true, then adds ito completedFrames and resets currentFrame
  endFrame() {

  }
  // returns running score, using bowlingScorecard
  getRunningScore() {

  }
 // boolean result, checks if game is over or not
  isGameOver() {

  }
}

module.exports = BowlingGame;
