function Game() {
  this.currentframenumber = 0
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.roll = function (pins) {
  if (this.currentframenumber === 0) {
    this.newFrame()
    this.currentframe.roll(pins)
  } else {
    if (this.currentframe.isFrameOpen() === true) {
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
    // console.log(this.currentframe.framenumber)
  }
}

Game.prototype.newFrame = function () {
  this.currentframenumber += 1
  this.currentframe = new Frame(this.currentframenumber)
  this.frames.push(this.currentframe)

}

// Game.prototype.getCurrentFrameNumber = function () {
//   return this.frames.length
// }

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
// Game.prototype.getFrameBowlIndexes = function (frame) {
//   return [(frame.framenumber * 2)-1, frame.framenumber * 2]
// }

Game.prototype.setPotentialBonus_1 = function (frame, pins) {
  frame.potentialbonus[0] = pins

}

Game.prototype.getPotentialBonus_1 = function (frame) {
  return frame.potentialbonus

}
