function Frame ()
{
  this.bowls = []
  this.MAXIMUM_PINS = 10
  this.REGULAR_FRAMESIZE = 2
}

Frame.prototype.getbowls = function () {
  return this.bowls
}

Frame.prototype.bowl = function (pins) {
  if (this.isFrameOpen() === true ) {
    this.bowls.push(pins)
    if (pins === this.MAXIMUM_PINS) {
      this.bowls.push(0)
    }
  }
  else {
    return "Only 2 bowls allowed"
  }
}

Frame.prototype.isFrameOpen = function () {
  if (this.getFrameSize() === this.REGULAR_FRAMESIZE) {
    return false
  } else {
    return true
  }
}

Frame.prototype.getFrameSize = function () {
  return this.bowls.length
}

Frame.prototype.getPinsScore = function () {
  return this.bowls[0] + this.bowls[1]
}

Frame.prototype.hasStrike = function () {
  if (this.bowls[0] === this.MAXIMUM_PINS) {
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
