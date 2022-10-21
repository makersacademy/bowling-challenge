const Frame = require('./frame')
const TenthFrame = require('./tenthframe')


class Game {

  constructor() {
    this.frames = []
  }

  calculateCurrentScore() {
    let score = 0
    let [spare, strike, consecutive_strike] = [false, false, false]

    this.frames.forEach((frame) => {
      if (spare) {score += frame.firstRoll}
      if (strike) {score += (frame.firstRoll + frame.secondRoll)}
      if (consecutive_strike) {score += (frame.firstRoll)}
      if (frame instanceof TenthFrame) {score += frame.thirdRoll}
      score += (frame.firstRoll + frame.secondRoll)
      consecutive_strike = strike && frame.checkStrike()
      spare = frame.checkSpare()
      strike = frame.checkStrike()
    })
    return score
  }

  addFrame(firstRoll, secondRoll = 0, thirdRoll = 0) {
    if (this.frames.length == 10) return "The game has finished"
    if (this.frames.length == 9) this.frames.push(new TenthFrame(firstRoll, secondRoll, thirdRoll))
    if (this.frames.length < 9) this.frames.push(new Frame(firstRoll, secondRoll))
  }
}

module.exports = Game