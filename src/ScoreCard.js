class ScoreCard {
  constructor () {
    this._frames = []
  }

  logFrame (frame) {
    this._frames.push(frame)
  }
}

module.exports = ScoreCard
