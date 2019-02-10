class ScoreCard {
  constructor () {
    this._lastFrame = null
    this._currentFrame = null
    this._score = 0
  }

  logFrame (frame) {
    this._lastFrame = this._currentFrame
    this._currentFrame = frame

    this._updateScore()
  }

  score () {
    return this._score
  }

  _updateScore () {
    const bonus = this._lastFrame ? this._calculateBonus() : 0
    this._score += this._calculateFramePoints(this._currentFrame) + bonus
  }

  _calculateBonus (frame) {
    const lastFrameOutcome = this._lastFrame.type()

    // return lastFrameOutcome === 'strike'
    //   ? this._calculateStrikeBonus(frame)
    //   : lastFrameOutcome === 'spare'
    //     ? this._calculateSpareBonus(frame)
    //     : 0

    switch (lastFrameOutcome) {
      case 'strike':
        return this._calculateStrikeBonus()
      case 'spare':
        return this._calculateSpareBonus()
      default:
        return 0
    }
  }

  _calculateFramePoints () {
    return (
      this._currentFrame.outcome()[0] + (this._currentFrame.outcome()[1] || 0)
    )
  }

  _calculateStrikeBonus () {
    return this._currentFrame.outcome()[0] + this._currentFrame.outcome()[1]
  }

  _calculateSpareBonus () {
    return this._currentFrame.outcome()[0]
  }
}

module.exports = ScoreCard
