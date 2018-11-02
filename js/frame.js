function Frame ()
{
  this.bowls = []
}

Frame.prototype.getbowls = function () {
  return this.bowls
}

Frame.prototype.bowl = function (pins) {
  if (this.isFrameOpen() === true ) {
    this.bowls.push(pins)
  }
  else {
    return "Only 2 bowls allowed"
  }
}

Frame.prototype.isFrameOpen = function () {
  if (this.getFrameSize() === 2) {
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
  if (this.bowls[0] === 10) {
    return true
  } else {
    return false
  }
}

Frame.prototype.hasSpare = function () {
if (this.hasStrike() === false && this.getPinsScore() === 10) {
  return true
} else {
  return false
}
}
