class ScoreBoard {
  totalScore (frames) {
    const scores = frames.map((frame) => frame.score())
    return scores.reduce((sum, score) => sum + score)
  }
}
