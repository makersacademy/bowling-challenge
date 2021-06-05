const Frame = require('./frame')

module.exports = class Game {
  constructor (frameClass = Frame) {
    this._frameClass = frameClass
    this._frames = []
    this._addNewFrame()
  }

  bowl (pinfall) {
    if (!this._isFinished) {
      this._currentFrame.addRoll(pinfall)
      this._broadcastBonuses(pinfall)
      if (this._currentFrame.isOver) {
        this._addNewFrame()
      }
    }
    return this.totalScore
  }

  _broadcastBonuses (pinfall) {
    this._frames.forEach((frame) => {
      frame.addBonus(pinfall)
    })
  }

  get totalScore () {
    return this._frames.reduce((sum, frame) => {
      return sum + frame.score
    }, 0)
  }

  get _isFinished () {
    return this._frames.every((frame) => {
      return frame.isOver && frame.isFinalized
    })
  }

  get _currentFrame () {
    return this._frames[this._frames.length - 1]
  }

  _addNewFrame () {
    this._frames.push(new this._frameClass())
  }
}
