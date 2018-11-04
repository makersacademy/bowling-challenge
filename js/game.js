function Game() {
  this.currentframenumber = 0
  this.previousframe
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.enterRoll = function (pins) {
  if (this.isLastFrame()) {
        return "10 frames already"
  }
  if (this.newGame() || !this.isFrameOpen(this.currentframe)) {
    this.newFrame()
  }
  this.frameRoll(this.currentframe, pins)

}

Game.prototype.frameRoll = function (frame, pins) {
  frame.roll(pins)
}

Game.prototype.newGame = function () {
  return (this.currentframenumber === 0) ? true : false
}

Game.prototype.newFrame = function () {
  if (this.newGame() === false) {
    this.setFinalIndexOfFrame(this.currentframe, this.lastRollIndex())
  }
  this.setFrameChange()
  this.frames.push(this.currentframe)
}

Game.prototype.setFrameChange = function () {
  this.currentframenumber += 1
  this.previousframe = this.currentframe
  this.currentframe = new Frame(this.currentframenumber)
}
Game.prototype.setFinalIndexOfFrame = function(frame, index) {
  frame.setFinalIndexOfFrame(index)
}

Game.prototype.getCurrentPinsScore = function () {
  return this.getAllRolls().reduce(function(a, b){return a+b;})
}

Game.prototype.getFrameRolls = function () {
  return this.frames.map(frame => {
    return frame.rolls
  })
}

Game.prototype.lastRollIndex = function () {
  return this.getAllRolls().length - 1
}

Game.prototype.getAllRolls = function () {
return this.getFrameRolls().reduce(function(prev, curr) {
  return prev.concat(curr);
});
}

Game.prototype.isLastFrame = function () {
  return this.currentframenumber === this.MAXIMUMFRAMES
}

Game.prototype.isFrameOpen = function (frame) {
  return frame.isFrameOpen()
}

Game.prototype.getPotentialBonus = function (frame) {
  var bonus = []
  bonus.push(this.getAllRolls()[frame.finalIndexOfFrame+1])
  bonus.push(this.getAllRolls()[frame.finalIndexOfFrame+2])
  return bonus.reduce(function(a, b){return a+b;})
}
