const Frame = require('./frame');

class Game {

  constructor() {
    this.frames = []
  }

  addFrame(roll1, roll2) {
    if (this.frames.length <= 9) this.frames.push(new Frame(roll1, roll2))
  }

  score() {
    let score = 0
    let [strike, strikes] = [false, false]
    this.frames.forEach((fr) => {
      if (fr.isSpare()) {score += fr.roll1}
      if (strike) {score += (fr.roll1 + fr.roll2)}
      if (strikes) {score += (fr.roll1)}
      score += (fr.roll1 + fr.roll2)
      strikes = strike && fr.isStrike()
      strike = fr.isStrike()
    })
    return score
  }
}

module.exports = Game