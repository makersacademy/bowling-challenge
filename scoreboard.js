const Frame = require('./frame')

class Scoreboard {
  
  constructor(frame = new Frame) {
    this.frame = frame
    this.gameScore = 0
    this.throwScores = []
  }

  singleRoll(pins) {
    if (this.isIllegalPins(pins) === true) {
    throw new Error(`Score recorded for throw ${this.throwScores.length + 1} is invalid`)
    }
    else
    this.throwScores.push(pins)
    this.frame.singleRoll(pins)
  }

  isIllegalPins(pins) {
    if (pins < 0 || pins > 10) {
      return true
    }
    return false
  }
}

module.exports = Scoreboard;