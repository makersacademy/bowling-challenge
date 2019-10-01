var Frame = require('../lib/frame')

function Bowling () {
  this._frame = new Frame()
  this._frameCount = 1
  this._play = 1
  this._scorecard = []
}

Bowling.prototype.roll = function (pin) {
  if (this.getPlay() === 1 && pin === 10) {
    this._frame.setPlayOne(pin)
    this._scorecard.push(this._frame._result)
    this._play = 1
    this._frameCount++
    this.lastSpare()
  } else if (this.getPlay() === 1 && pin < 10) {
    this._frame.setPlayOne(pin)
    this._play = 2
    this.lastSpare()
  } else if (this.getPlay() === 2) {
    this._frame.setPlayTwo(pin)
    this._scorecard.push(this._frame._result)
    this._play = 1
    this.lastStrike()
    this._frameCount++
  }
}

Bowling.prototype.lastStrike = function () {
  if (this._frame.lastStrike() === true) {
    var lastframe = this._frameCount - 2
    this.getScorecard()[lastframe][3] = `Frame score: ${10 +
      this._frame._playOne +
      this._frame._playTwo}`
  }
}

Bowling.prototype.lastSpare = function () {
  if (this._frame.lastSpare() === true) {
    var lastframe = this._frameCount - 2
    this.getScorecard()[lastframe][3] = `Frame score: ${10 +
      this._frame._playOne}`
    this.getScorecard()[lastframe][2] = `Play 2: /`
  }
}

Bowling.prototype.getScorecard = function () {
  return this._scorecard
}

Bowling.prototype.getPlay = function () {
  return this._play
}

Bowling.prototype.getFrame = function () {
  return this._frameCount
}

Bowling.prototype.isFinished = function () {
  return this._scorecard.length === 10
}

module.exports = Bowling
