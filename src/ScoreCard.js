class ScoreCard {
  constructor () {
    this._lastFrame = null
    this._score = 0
  }

  logFrame (frame) {
    this._updateScore(frame)
    this._lastFrame = frame
  }

  score () {
    return this._score
  }

  _updateScore (frame) {
    const bonus = this._lastFrame ? this._calculateBonus(frame) : 0
    this._score += this._calculateFramePoints(frame) + bonus
  }

  _calculateBonus (frame) {
    const lastFrameOutcome = this._lastFrame.outcomeType()

    switch (lastFrameOutcome) {
      case 'strike':
        return this._calculateStrikeBonus(frame)
      case 'spare':
        return this._calculateSpareBonus(frame)
      default:
        return 0
    }
  }

  _calculateFramePoints (frame) {
    return frame.outcome()[0] + (frame.outcome()[1] || 0)
  }

  _calculateStrikeBonus (frame) {
    return frame.outcome()[0] + frame.outcome()[1]
  }

  _calculateSpareBonus (frame) {
    return frame.outcome()[0]
  }
}

module.exports = ScoreCard
