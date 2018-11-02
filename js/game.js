function Game() {
  this.currentframenumber = 0
  this.currentframe
  this.frames = []
};

Game.prototype.newFrame = function () {
  this.currentframe = new Frame()
  this.frames.push(this.currentframe)
  this.currentframenumber += 1
}

Game.prototype.getCurrentFrameNumber = function () {
  return this.currentframenumber
}

Game.prototype.bowl = function (pins) {
  if (this.currentframe.isFrameOpen() === true) {
    this.currentframe.bowl(pins)
  }
  else
  {
    this.newFrame()
    this.currentframe.bowl(pins)
  }
}
