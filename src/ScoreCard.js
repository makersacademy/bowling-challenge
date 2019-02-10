class ScoreCard {
  constructor () {
    this._frames = []
  }

  logFrame (frame) {
    this._frames.push(frame)
  }

  score () {
    return this._frames
      .map(frame => frame.outcome()[0] + frame.outcome()[1])
      .reduce((sum, currentValue) => sum + currentValue)
  }
}

module.exports = ScoreCard
