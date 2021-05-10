class ScoreBoard {
  totalScore (frames) {
    return this._scores(frames).reduce((sum, score) => sum + score)
  }

  calculateRunningTotal () {
    const accumulator = ((sum) => (value) => sum += value)(0)
    return this._scores().map(accumulator)
  }

  _scores (frames) {
    return frames.map((frame) => frame.score())
  }
}
