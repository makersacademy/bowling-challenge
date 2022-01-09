class Score {
  constructor (game) {
    this.total = 0
    this.game = game
  }

  addToTotal () {
    const currentFrame = this.game.frames.at(-1)
    const prevFrame = this.game.frames.at(-2)
    const frameSum = currentFrame.reduce((p, c) => p + c)
    let result = (this.game.isSpare(prevFrame) || this.game.isStrike(prevFrame)) ? (frameSum + this.addBonus(currentFrame)) : frameSum
    return this.total += result
  }

  addBonus (frame) {
    let result = this.game.isSpare(this.game.frames.at(-2)) ? frame.at(0) : frame.at(0) + frame.at(1)
    return result
  }
}

module.exports = Score