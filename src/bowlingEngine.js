var BowlingEngine = function (frameConstructor = Frame) {
  this._frameClass = frameConstructor
  this.currentFrame = 0
  this.frames = []
}

BowlingEngine.prototype.startGame = function () {
  this.addFrame()
}

BowlingEngine.prototype.addFrame = function () {
  var frame = new this._frameClass
  this.frames.push(frame)
  this.currentFrame ++
}