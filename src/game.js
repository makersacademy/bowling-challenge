function Game () {
  this._frames = []
  this._finished = false
}

Game.prototype.getFrames = function () {
  return this._frames
}

Game.prototype.getCurrentFrame = function () {
  return this._frames[this._frames.length - 1]
}

Game.prototype.startNextFrame = function () {
  if (this._frames.length === 9) {
    this._frames.push(new FinalFrame())
  } else {
    this._frames.push(new Frame())
  }
}

Game.prototype.getCurrentScore = function () {
  return this._frames.reduce(function (total, frame, index, frames) {
    return total + frame.getScore(frames[index + 1], frames[index + 2])
  }, 0)
}

Game.prototype.addBowl = function (pins) {
  if (this.isFinished()) { throw 'Cannot add bowl - game over!' }
  if (this.getCurrentFrame().isFinished()) { this.startNextFrame() }
  this.getCurrentFrame().addBowl(pins)
  this.getCurrentScore()
}

Game.prototype.isFinished = function () {
  if (this._frames.length >= 10 && this.getCurrentFrame().isFinished()) {
    this._finished = true
    return this._finished
  }
}
