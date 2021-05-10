class ScoreBoard {
  totalScore (frames) {
    return this._scores(frames).reduce((sum, score) => sum + score)
  }

  calculateRunningTotal (frames) {
    return this._scores(frames).map(((sum) => (value) => sum += value)(0))
  }

  _scores (frames) {
    return frames.map((frame) => frame.score())
  }
}
