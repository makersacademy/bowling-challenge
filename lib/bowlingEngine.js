const FrameInterface = require('./frameInterface')
var frame

function BowlingEngine (frameConstructor = FrameInterface) {
  this._frameBuilder = frameConstructor
  this.currentFrame = 0
  this.frames = []
  this.totalScore = 0
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
  if(this.frames[currentFrame]._isComplete) {
    this.addFrame()
  }
  this.frames[currentFrame].newBall(number)
  this.score()
}

BowlingEngine.prototype.isLastFrame = function () {
  return this.frames.length === 9
}

BowlingEngine.prototype.score = function () {
  for (var frame of this.frames) {
    if (frame._isComplete && !frame._isScored) {
      if (frame._strikes === 0 && frame._spares === 0) {
        this.totalScore += frame._score.reduce(function (accumulator, value) {
          return (accumulator + value)
        })
        frame._isScored = true
      } else if (frame._spares === 1) {
        this.totalScore += frame._score.reduce(function (accumulator, value) {
          return (accumulator + value)
        })
        frame._isScored = true
      }
    }
  }
}

module.exports = BowlingEngine