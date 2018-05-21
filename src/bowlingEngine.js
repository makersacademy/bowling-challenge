var BowlingEngine = function (frameConstructor = FrameInterface) {
  this._frameBuilder = frameConstructor
  this.currentFrame = 0
  this.frames = []
}

BowlingEngine.prototype.startGame = function () {
  this.addFrame()
}

BowlingEngine.prototype.addFrame = function () {
  var frame = this._frameBuilder()
  this.frames.push(frame)
  this.currentFrame ++
}

BowlingEngine.prototype.throwBall = function (number) {
  var currentFrame = this.currentFrame - 1
  console.log(this.frames)
  console.log(this.frames[currentFrame])
  return this.frames[currentFrame].newBall(number)

}

var bowlingEngine = new BowlingEngine()
bowlingEngine.startGame()
bowlingEngine.throwBall(5)
bowlingEngine.throwBall(5)