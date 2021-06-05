const Frame = require('./frame')

module.exports = class Game {
  constructor (frameClass = Frame) {
    this._frameClass = frameClass
    this._frames = []
    this._addNewFrame()
  }

  bowl (pinfall) {
    this._currentFrame.addRoll(pinfall)
  }

  get _currentFrame () {
    return this._frames[this._frames.length - 1]
  }

  _addNewFrame () {
    this._frames.push(new this._frameClass())
  }
}
