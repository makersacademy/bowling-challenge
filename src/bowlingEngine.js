var BowlingEngine = function (frameConstructor = FrameInterface) {
  this._frameBuilder = frameConstructor
  console.log(this._frameBuilder)
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

BowlingEngine.prototype.throwBall = function () {
  
}