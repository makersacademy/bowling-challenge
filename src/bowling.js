'use strict';

class Bowling {
  
  constructor() {
    this.game = []
    this.score = 0
    this.frame = []
    this.frameCount = 0
    this.ball_number = 1
  }

  // newRoll () {
  //   var frame = new Frame
  // }

  isStrike(frame) { // checks whether the role was a strike.
    return (frame[0] == 10)
  }

  isSpare(frame) { // checks whether the role was a spare
    return (frame.reduce((a, b) => a + b, 0) == 10)
  }

  isGutterGame(callback) {
    return (callback.flat().reduce((a, b) => a + b, 0) == 0)
  }

  isTenthFrame(callback) {
    return (callback.length == 9)
  }
  
  isSecondRoll(callback) {
    return (callback.length == 1)
  }

  addToScore(frame) {
    this.score += frame.flat().reduce((a, b) => a+b, 0)
  }

  addRoll(roll) {
    this.frame.push(roll)
  }

  addFrameToGame(frame) {
    this.game.push(frame)
  }

  updateFrameCount() {
    this.frameCount = this.game.length
  }

  resetFrame() {
    this.frame = []
  }

  nextRoll() {
    this.ball_number ++
  }

  // isPerfectGame(callback) {
  //   return (callback.flat().reduce((a, b) => a + b, 0) == 300)
  // }

}
