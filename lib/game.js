class Game {
  constructor () {
    this.frames = []
  }

  addRolls (roll1, roll2, bonusRoll = 0) {
    this.maxTen(roll1, roll2)
    if (this.isLastFrame() && this.isSpare([roll1, roll2])) {
      this.frames.push([roll1, roll2, bonusRoll])
    } else {
      this.frames.push([roll1, roll2])
    }
  }

  isSpare (frame) {
    let result = (frame !== null && frame.reduce((p, c) => p + c) === 10 && frame.at(0) > 0 && frame.at(0) < 10) ? true : false
    return result
  }

  maxTen (roll1, roll2) {
    const result = [roll1, roll2].reduce((p, c) => p + c)
    if (result > 10 && this.isLastFrame() === false) {
      throw new Error('Sum of the rolls cannot exceed 10')
    }
  }

  isLastFrame () {
    let result = (this.frames.length === 9) ? true : false
    return result
  }
}

module.exports = Game
