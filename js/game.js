function Game() {
  this.currentframenumber = 0
  this.previousframe
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.roll = function (pins) {
  if (this.newGame() === true) {
    this.newFrame()
    this.currentframe.roll(pins)
  } else {
    if (this.currentframe.isFrameOpen() === true && this.currentframe.isValidRoll(pins) === true) {
      this.currentframe.roll(pins)
    }
    else
    {
      if (this.currentframenumber === 10) {
        return "10 frames already"
      } else {
        this.newFrame()
        this.currentframe.roll(pins)
      }
    }
  }
}

Game.prototype.newGame = function () {
  return (this.currentframenumber === 0) ? true : false
}

Game.prototype.newFrame = function () {
  if (this.newGame() === false) {
    this.currentframe.setFinalIndexOfFrame(this.lastRollIndex())
  }
  this.setFrameChange()
  this.frames.push(this.currentframe)
}

Game.prototype.setFrameChange = function () {
  this.currentframenumber += 1
  this.previousframe = this.currentframe
  this.currentframe = new Frame(this.currentframenumber)
}

Game.prototype.getCurrentScore = function () {
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

Game.prototype.getPotentialBonus = function (frame) {
  var bonus = []
  bonus.push(this.getAllRolls()[frame.finalIndexOfFrame+1])
  bonus.push(this.getAllRolls()[frame.finalIndexOfFrame+2])
  return bonus.reduce(function(a, b){return a+b;})
}
