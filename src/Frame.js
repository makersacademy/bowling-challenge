function Frame(roll, frameNumber) {
  this.frame = {
    roll1: roll,
    roll2: 0,
    total: roll,
    type: this._rollType(roll)
  }
  if (frameNumber === 10) {
    this.frame.roll3 = 0
  }
}

Frame.prototype.viewFrame = function() {
  return this.frame
}


Frame.prototype._rollType = function(roll) {
  if (roll === 10) {
    return 'strike'
  } else {
    return ""
  }
}

