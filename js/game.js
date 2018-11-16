function Game() {
  this.currentframenumber = 0
  this.previousframe
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};


Game.prototype.enterRoll = function (pins) {
  if (this.newGame() || !this.isFrameOpen(this.currentframe)) {
    this.newFrame()
  }
  if (this.isLastFrame() && !this.isFrameOpen(this.currentframe)) {
    this.finalBonusRoll(pins)
  }
  this.frameRoll(this.currentframe, pins)
}

Game.prototype.finalBonusRoll = function (pins) {

  if(this.currentframe.hasStrike()) {
    if (this.currentframe.frame_bonus[0] != 0){
    this.currentframe.frame_bonus[1] = pins
  }
  else
  {
    this.currentframe.frame_bonus[0] = pins
    this.previousframe.frame_bonus[1] = pins
  }}
  if(this.currentframe.hasSpare()) {
    this.currentframe.frame_bonus[0] = pins
  }
}

Game.prototype.frameRoll = function (frame, pins) {
  frame.addRoll(pins)
}


Game.prototype.newGame = function () {
  return (this.currentframenumber === 0) ? true : false
}

Game.prototype.newFrame = function () {
  if (this.newGame() === false) {
    this.setFinalIndexOfFrame(this.currentframe, this.lastRollIndex())
  }
  if (this.currentframenumber < 10) {
    this.setFrameChange()
    this.frames.push(this.currentframe)
  }
}

Game.prototype.setFrameChange = function () {
  this.currentframenumber += 1
  this.previousframe = this.currentframe
  this.currentframe = new Frame(this.currentframenumber)
}
Game.prototype.setFinalIndexOfFrame = function(frame, index) {
  frame.setFinalIndexOfFrame(index)
}
Game.prototype.isLastFrame = function () {
  return this.currentframenumber === this.MAXIMUMFRAMES
}

Game.prototype.isFrameOpen = function (frame) {
  return frame.isFrameOpen()
}

Game.prototype.lastRollIndex = function () {
  return this.getAllRolls().length - 1
}

Game.prototype.getAllRolls = function () {
return this.getFrameRolls().reduce(function(prev, curr) {
  return prev.concat(curr);
});
}

Game.prototype.getFrameRolls = function () {
  return this.frames.map(frame => {
    return frame.rolls
  })


}
Game.prototype.getCurrentPinsScore = function () {
  return this.getAllRolls().reduce(function(a, b){return a+b;})
}

Game.prototype.getFrameBonus = function (frame) {
  return this.getFrameBonusValues(frame).reduce(function(a, b){return a+b;})
}

Game.prototype.getFrameBonusValues = function (frame) {
  var bonus = frame.frame_bonus

  if (frame.hasStrike()) {
    if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+1])) {
      bonus[0] = (this.getAllRolls()[frame.finalIndexOfFrame+1])
    }
    if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+2])) {
      bonus[1] = (this.getAllRolls()[frame.finalIndexOfFrame+2])
    }
  }

  if (frame.hasSpare()) {
      if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+1])) {
        bonus[0]=(this.getAllRolls()[frame.finalIndexOfFrame+1])
      }
        bonus[1]=0
    }

  frame.setBonus(bonus)
  return bonus
}

Game.prototype.calculateGameTotalScore = function (frame) {
  return this.getCurrentTotalScoreValues().reduce(function(a, b){return a+b;})
}

Game.prototype.getCurrentTotalScoreValues = function () {
  return this.frames.map(frame => {
    return this.calculateFrameTotalScore(frame)
  })
}

Game.prototype.calculateFrameTotalScore = function (frame) {
  return  frame.getPinsScore() + this.getFrameBonus(frame)
}
