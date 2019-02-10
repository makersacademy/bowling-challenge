class ScoreCard {
  constructor () {
    this._frames = []
    this._lastFrameOutcome = null
    this._score = 0
  }

  logFrame (frame) {
    this._frames.push(frame)
    this._score += frame.outcome()[0] + frame.outcome()[1]
  }

  lastFrameOutcome () {
    const frame = this._frames[this._frames.length - 1]
    if (frame.outcome()[0] === 10) {
      return 'strike'
    } else if (frame.outcome()[0] + frame.outcome()[1] === 10) {
      return 'spare'
    } else {
      return 'open'
    }
  }

  score () {
    // return this._frames
    //   .map(frame => frame.outcome()[0] + frame.outcome()[1])
    //   .reduce((sum, currentValue) => sum + currentValue)
    return this._score
  }
}

module.exports = ScoreCard
