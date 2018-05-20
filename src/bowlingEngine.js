var BowlingEngine = function (frameConstructor = FrameInterface) {
  this._frameClass = frameConstructor()
  console.log(this._frameClass)
  this.currentFrame = 0
  this.frames = []
}

BowlingEngine.prototype.startGame = function () {
  this.addFrame()
}

BowlingEngine.prototype.addFrame = function () {
  var frame = this._frameClass
  this.frames.push(frame)
  this.currentFrame ++
}

BowlingEngine.prototype.throwBall = function () {
  
}