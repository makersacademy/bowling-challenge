'use strict';

class Bowling {
  
  constructor() {
    this.game = []
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
}
