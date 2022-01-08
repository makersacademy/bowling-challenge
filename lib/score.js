class Score {
  constructor (game) {
    this.total = 0
    this.game = game
  }

  addToTotal() {
    const currentFrame = this.game.frames.at(-1)
    // const previuosFrame = this.game.frames[-2]
    let result = currentFrame.reduce((p, c) => p + c)
    return this.total += result
  }
}

module.exports = Score