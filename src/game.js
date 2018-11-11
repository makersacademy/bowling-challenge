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
  if (this.frames.length === 0 ||
    this.currentFrame().isFinished() === true) {
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
    this.bonus.shift()
  }
  this.bonus.push(pins)
}

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 2]
}

Game.prototype.frameBeforeLast = function() {
  return this.frames[this.frames.length - 3]
}

Game.prototype.scoreSpare = function() {
  if (this.lastFrame().isSpare === true && this.lastFrame().score === 0) {
    this.lastFrame().addBonus(this.bonus[this.bonus.length - 1])
    this.lastFrame().recordScore()
  }
}

Game.prototype.scoreStrike = function() {
  if (this.lastFrame().isStrike === true
  && this.currentFrame().isFinished() === true
  && this.currentFrame().isStrike === false) {
    this.lastFrame().addBonus(this.bonus.reduce(add, 0))
    this.lastFrame().recordScore()
  }
  if (this.frames.length >= 3) {
    if (this.lastFrame().isStrike === true
    && this.frameBeforeLast().isStrike === true) {
      this.frameBeforeLast().addBonus(this.bonus.reduce(add, 0))
      this.frameBeforeLast().recordScore();
    }
  }
}
// this will only work if there are no frames with no scores!
Game.prototype.totalScore = function() {
  return this.frames.map(frame => frame['score']).reduce(add, 0)
}
