const Frame = require('./frame')

class TenthFrame extends Frame {
  constructor(firstRoll, secondRoll, thirdRoll) {
    super()
    this.firstRoll = firstRoll
    this.secondRoll = secondRoll
    this.thirdRoll = thirdRoll
  }
}

module.exports = TenthFrame