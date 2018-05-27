const FrameInterface = require('./frameInterface')
var frame

function BowlingEngine (frameConstructor = FrameInterface) {
  this._frameBuilder = frameConstructor
  this.currentFrame = 0
  this.frames = []
}

BowlingEngine.prototype.startGame = function () {
  this.addFrame()
}

BowlingEngine.prototype.addFrame = function () {
  if (this.isLastFrame()) {
    frame = this._frameBuilder('last')
  } else {
    frame = this._frameBuilder()
  }
  this.frames.push(frame)
  this.currentFrame ++
}

BowlingEngine.prototype.throwBall = function (number) {
  var currentFrame = this.currentFrame - 1
  this.frames[currentFrame].newBall(number)
}

BowlingEngine.prototype.isLastFrame = function () {
  this.frames.length == 9 ? true : false
}

module.exports = BowlingEngine