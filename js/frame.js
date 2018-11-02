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
