function Game() {
  this.frames = []
  this.currentFrameNumber = 0
  this.bonus = []
}

Game.prototype.addFrame = function() {
  var frame = new Frame
  this.frames.push(frame)
  this.currentFrameNumber ++
}

Game.prototype.bowl = function(pins) {
  if (this.frames.length === 0 || this.currentFrame().isFinished() === true) {
    this.addFrame();
  }
  this.currentFrame().roll(pins);
  if (this.frames.length >= 2) {
    this.recordBonus(pins)
    this.scoreSpare()
    this.scoreStrike()
  }
}

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length - 1]
}

Game.prototype.recordBonus = function(pins) {
  if (this.bonus.length >= 2) {
    this.bonus.shift
  }
  this.bonus.push(pins)
}

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 2]
}

Game.prototype.scoreSpare = function() {
  if (this.lastFrame().isSpare === true) {
    this.lastFrame().addBonus(this.bonus[0])
    this.lastFrame().recordScore()
  }
}

Game.prototype.scoreStrike = function() {
  if (this.lastFrame().isStrike === true && this.currentFrame().isFinished() === true) {
    this.lastFrame().addBonus(this.bonus.reduce(add, 0))
    this.lastFrame().recordScore()
  }
}

Game.prototype.calculateTotalScore = function() {
  this.totalScore = this.frames.map(frame => frame['score']).reduce(add, 0)
}

Game.prototype.totalScore = function() {
  return this.totalScore
}
