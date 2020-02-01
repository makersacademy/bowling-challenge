
function Game() {
  this.score = 0
  this.rollFirst = true
  this.rollNumber = 0
  this.rollMax = 20
  this.frames = []
  this.end = false
}

var game = new Game()

Game.prototype.roll = function(pins) {
  this.finalFrame()
  this.over()
  this.anyStrike(pins)
  this.anySpare(pins)
  this.addToFrames(pins)
  this.score += pins
  this.strike(pins)
  this.rollNumber += 1
}

Game.prototype.finalFrame = function() {
  (this.rollNumber >= this.rollMax - 1) ? (this.end = true) : (this.end = false)
}

Game.prototype.over = function(pins) {
  if (this.end === true && (this.frames[this.frames.length - 1][0] + this.frames[this.frames.length - 1][1]) < 10) {
    throw new Error ("Game is over")
  } else if (this.end === true && (this.frames[this.frames.length - 1][0] + this.frames[this.frames.length - 1][1]) >= 10) {
    return
  } else if (this.rollNumber > this.rollMax) {
    throw new Error ("Game is over")
  }
}

Game.prototype.strike = function(pins) {
  if (this.rollFirst === true && pins === 10 && this.rollNumber !== this.rollMax - 2) {
    this.rollMax -= 1
  } else if (this.rollFirst === true && pins === 10 && this.rollNumber !== this.rollMax - 2) {
    this.rollMax += 1
  } else {
    this.rollFirst = !this.rollFirst
  }
}

Game.prototype.addToFrames = function(pins) {

  if (this.rollFirst === true) {
    (this.frames).push([pins])
  } else if (this.rollFirst !== true && this.frames.length > 0) {
    (this.frames[this.frames.length - 1]).push(pins)
  } else {
  }

}

Game.prototype.anyStrike = function(pins) {
  if (this.rollNumber >= 1 && this.rollNumber < this.rollMax - 1) {

    if (this.frames.flat()[this.rollNumber - 1] === 10 && this.frames.flat()[this.rollNumber - 2] === 10) {
      this.score += (pins + pins)
    } else if (this.frames.flat()[this.rollNumber - 1] === 10 || this.frames.flat()[this.rollNumber - 2] === 10) {
      this.score += pins
    }

  } else if (this.rollNumber > (this.rollMax -1)) {

    this.score = this.score

  } else if (this.rollNumber === (this.rollMax-1)) {

    this.score += pins

  }
}

Game.prototype.anySpare = function(pins) {
  if (this.rollNumber >= 2 && this.frames[this.frames.length - 1].length == 2) {

    if ((this.frames[this.frames.length - 1][0] + this.frames[this.frames.length - 1][1]) === 10 ) {
      this.score += pins
    } else {
      return pins
    }
  } else if (this.rollNumber === this.rollMax && (this.frames[this.frames.length - 1][0] + this.frames[this.frames.length - 1][1]) >= 10) {
      this.rollMax += 1
  } else {
    return pins
  }
}


