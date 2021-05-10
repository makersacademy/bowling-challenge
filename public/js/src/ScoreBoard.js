class ScoreBoard {
  totalScore (frames) {
    return this.scores(frames).reduce((sum, score) => sum + score)
  }

  scores (frames) {
    return frames.map((frame) => frame.score())
  }
}
