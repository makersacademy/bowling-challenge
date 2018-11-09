function Game() {
  this.currentframenumber = 0
  this.previousframe
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.enterRoll = function (pins) {
  // console.log("AAA")
  if (this.isLastFrame()) {
    // this.frameRoll(this.currentframe, pins)
    // console.log(this.currentframe.rolls)
    if (this.currentframe.hasStrike()) {
      this.currentframe.addBonus(pins)
      if (this.currentframe.frame_bonus[2] === 10){
        this.previousframe.setBonus([10,10])
      }
    }

    if (this.currentframe.hasSpare()) {

      console.log("BONUS:" ,this.currentframe.frame_bonus)
      console.log("PREVIOUS BONUS:" ,this.previousframe.frame_bonus)
      this.currentframe.addBonus(pins)
      // if (this.currentframe.frame_bonus[2] === pins){
        // console.log("fdfdsfsfss")
        this.previousframe.setBonus([pins,0])
      // }
      // if (this.currentframe.frame_bonus === [0,0,10,10]){
      //   this.previousframe.setBonus([10,10])
      // }
      console.log("BONUS x:" ,this.currentframe.frame_bonus)
      console.log("PREVIOUS BONUS x:" ,this.previousframe.frame_bonus)

    }
    console.log("last frame already")
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

Game.prototype.getFrameBonus = function (frame) {
  // console.log(this.getFrameBonusValues(frame))
  return this.getFrameBonusValues(frame).reduce(function(a, b){return a+b;})
}

Game.prototype.getFrameBonusValues = function (frame) {
  var bonus = frame.frame_bonus
  // console.log("bonus: ", bonus)
  if (bonus != []) {

  if (frame.hasSpare()) {
    // console.log("sparebonus")
      if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+1])) {
        bonus[0]=(this.getAllRolls()[frame.finalIndexOfFrame+1]) }
        bonus[1]=0
    } else if (frame.hasStrike()) {
      // console.log("strikebonus")
      // console.log(this.getAllRolls()[frame.finalIndexOfFrame+1])
      if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+1])) {
        bonus[0]=(this.getAllRolls()[frame.finalIndexOfFrame+1])
      }
      if (!isNaN(this.getAllRolls()[frame.finalIndexOfFrame+2])) {
      bonus[1]=(this.getAllRolls()[frame.finalIndexOfFrame+2])
    }
    }
  }
  frame.setBonus(bonus)
  // console.log("frame bonus xxx: ", frame.framenumber, frame.getBonus())
  return bonus
}

Game.prototype.calculateFrameTotalScore = function (frame) {
  return  frame.getPinsScore() + this.getFrameBonus(frame)
}

Game.prototype.calculateGameTotalScore = function (frame) {
  // console.log(this.getCurrentTotalScoreValues())
  return this.getCurrentTotalScoreValues().reduce(function(a, b){return a+b;})
}

Game.prototype.getCurrentTotalScoreValues = function () {
  return this.frames.map(frame => {
    return this.calculateFrameTotalScore(frame)
  })
}
