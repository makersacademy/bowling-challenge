class Score {
  constructor (game) {
    this.total = 0
    this.game = game
  }

  addToTotal () {
    const currFrame = this.game.frames.at(-1)
    const frameSum = currFrame.reduce((p, c) => p + c)
    const pFrame = this.game.frames.at(-2)
  
    let result = (pFrame !== undefined && this.game.isSpare(pFrame[0], pFrame[1]) || pFrame !== undefined && this.game.isStrike(pFrame[0], pFrame[1])) ? (frameSum + this.addBonus(currFrame[0], currFrame[1])) : frameSum
    return this.total += result
  }

  addBonus (roll1, roll2) {
    const frame = [roll1, roll2]
    const pFrame = this.game.frames.at(-2)
    let result = this.game.isSpare(pFrame[0], pFrame[1]) ? frame[0] : roll1 + roll2
    return result
  }
}

module.exports = Score