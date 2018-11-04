function Frame (framenumber)
{
  this.framenumber = framenumber
  this.rolls = []
  this.FRAME_MAX = 10
  this.MAXIMUM_PINS = 10
  this.REGULAR_FRAMESIZE = 2
  this.GUTTER_FRAME = 0
  this.finalIndexOfFrame
}

Frame.prototype.getrolls = function () {
  return this.rolls
}

Frame.prototype.isFinalFrame = function () {
  return (this.framenumber === this.FRAME_MAX) ? true : false
}

Frame.prototype.roll = function (pins) {
  if (this.isFrameOpen()) {
    this.rolls.push(pins)
  }
  else {
    return "Max. 2 rolls allowed"
  }
}

Frame.prototype.isFrameOpen = function () {
  return (this.hasStrike() || this.maxRollsReached()) ? false : true
}

Frame.prototype.getFrameSize = function () {
  return this.rolls.length
}

Frame.prototype.getPinsScore = function () {
  return this.rolls.reduce(function(a, b){return a+b;})
}

Frame.prototype.hasStrike = function () {
  return (this.rolls[0] === this.MAXIMUM_PINS) ? true : false
}

Frame.prototype.hasSpare = function () {
  return (!this.hasStrike() && this.maxPinsReached()) ? true : false
}

Frame.prototype.maxPinsReached = function () {
  return (this.getPinsScore() === this.MAXIMUM_PINS) ? true : false
}

Frame.prototype.maxRollsReached = function () {
  return (this.getFrameSize() === this.REGULAR_FRAMESIZE) ? true : false
}

Frame.prototype.isValidRoll = function (pins) {
  if (this.getFrameSize() > 0) {
    return (pins > this.remainingPins()) ? false : true
  } else {
    return true
  }
}

Frame.prototype.remainingPins = function () {
  return this.MAXIMUM_PINS - this.getPinsScore()
}

Frame.prototype.getFrameNumber = function () {
  return this.framenumber
}

Frame.prototype.setFinalIndexOfFrame = function (index) {
  this.finalIndexOfFrame = index
}
