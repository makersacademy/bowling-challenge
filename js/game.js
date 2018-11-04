function Game() {
  this.currentframenumber = 0
  this.previousframe
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.roll = function (pins) {
  if (this.currentframenumber === 0) {
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

Game.prototype.newFrame = function () {
  if (this.currentframenumber != 0) {
    this.currentframe.finalIndexOfFrame = this.getAllRolls().length-1
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
  var realscores = this.getAllRolls().filter(function(x) { return x >= 0; });
  return realscores.reduce(function(a, b){return a+b;})
}

Game.prototype.getAllRolls = function () {
  var framerolls = this.frames.map(frame => {
    return frame.rolls
})
return framerolls.reduce(function(prev, curr) {
  return prev.concat(curr);
});
}

Game.prototype.getPotentialBonus = function (frame) {
  var arr = []
  arr.push(this.getAllRolls()[frame.finalIndexOfFrame+1])
  arr.push(this.getAllRolls()[frame.finalIndexOfFrame+2])
  return arr.reduce(function(a, b){return a+b;})
}
