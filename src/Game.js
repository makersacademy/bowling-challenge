function Game(frame = new Frame) {
  this._scoreCardArray = []
  this._framesArray = [frame]
  this._score = 0
  this._bonusShots = 0

}

Game.prototype.newFrame = function(frame = new Frame) {
  this._framesArray.push(frame)

}

Game.prototype.allFrames = function() {
  return this._framesArray
}

Game.prototype.currentFrame = function() {
  return this._framesArray[this._framesArray.length - 1]
}

Game.prototype.frameNumber = function() {
  return this._framesArray.length
}

Game.prototype.play = function(rollScore, frame = new Frame) {


  if (this.frameNumber() <= 10) {

    var currentFrame = this.currentFrame()
    currentFrame.roll(rollScore)
    frameState = currentFrame.frameOutcome()
    if (frameState.length === 2 || frameState[0] === "X") {

      if (frameState[0] === "X") {
        this.strike(rollScore, frameState)
      } else {
        this._score += rollScore
        if (this.bonusShotsRemaining() !== 0) {
          this.bonusShot(rollScore)
        }
        this._scoreCardArray.push(frameState)
        this.newFrame()
      }
      
    } else {
      if (this.bonusShotsRemaining() !== 0){
        this.bonusShot(rollScore)
        this._score += rollScore
      } else {
        this._score += rollScore
      }

    }

  } else {
    return 'Game Over'
  }
}

Game.prototype.scorecard = function() {
  return this._scoreCardArray
}

Game.prototype.score = function() {
 return this._score
}

Game.prototype.strike = function(rollScore, frameState) {
  if (this.bonusShotsRemaining() !== 0) {
    this.bonusShot(rollScore)
  }
  this._bonusShots = 2
  this._score += rollScore
  this._scoreCardArray.push(frameState)
  this.newFrame()
}

Game.prototype.bonusShotsRemaining = function() {
  return this._bonusShots
}

Game.prototype.spare = function() {
  this._bonusShots = 1
}

Game.prototype.bonusShot = function(rollScore) {
  this._score += rollScore
  this._bonusShots -= 1

}
