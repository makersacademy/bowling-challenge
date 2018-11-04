function Frame (framenumber)
{
  this.framenumber = framenumber
  this.rolls = []
  this.MAXIMUM_PINS = 10
  this.REGULAR_FRAMESIZE = 2
  this.GUTTER_FRAME = 0
  this.finalIndexOfFrame
}

Frame.prototype.getrolls = function () {
  return this.rolls
}

Frame.prototype.roll = function (pins) {
  if (this.isFrameOpen() === true  ) {
    this.rolls.push(pins)
    if (pins === this.MAXIMUM_PINS) {
      // this.rolls.push(this.BLANK_AFTER_STRIKE)
    }
  }
  else {
    return "Only 2 rolls allowed"
  }
}

Frame.prototype.isFrameOpen = function () {
  if (this.hasStrike() === true || this.getFrameSize() === this.REGULAR_FRAMESIZE) {
    return false
  } else {
    return true
  }
}

Frame.prototype.getFrameSize = function () {
  return this.rolls.length
}

Frame.prototype.getPinsScore = function () {
  // return this.rolls[0] + this.rolls[1]
  return this.rolls.reduce(function(a, b){return a+b;})
}

Frame.prototype.hasStrike = function () {
  if (this.rolls[0] === this.MAXIMUM_PINS) {
    return true
  } else {
    return false
  }
}

Frame.prototype.hasSpare = function () {
if (this.hasStrike() === false && this.getPinsScore() === this.MAXIMUM_PINS) {
  return true
} else {
  return false
}
}

Frame.prototype.isValidRoll = function (pins) {
  if (this.getFrameSize() > 0) {
    if (this.getPinsScore() + pins > this.MAXIMUM_PINS){
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

Frame.prototype.getFrameNumber = function () {
  return this.framenumber
}
