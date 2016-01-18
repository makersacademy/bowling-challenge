function Frame() {
  this.turn = 0
  this.pins = 10
  this.currentFrame = []
  this.metaFrame = []
  this.strike = false
  this.spare = false
}

Frame.prototype.play = function(hitPins) {
  // var a = (Math.round(Math.random() * this.pins))
  var a = hitPins
  this.pins -= a
  this.turn += 1
  if (this.strike) {
    this.currentFrame.push(a)
    this.strikeCount += 1
    if (this.strikeCount === 2) {
      this.strike = false
    }
  }
  else if (this.spare && this.turn === 1) {
    this.metaFrame.slice(-1)[0].push(a)
    this.currentFrame.push(a)
    this.spare = false
  }
  else {
    this.currentFrame.push(a)
  }
  if (this.pins === 0) {
    this._strikeOrSpare()
  }
  if (this.turn === 2) {
    this.reset();
  }
}

Frame.prototype._strikeOrSpare = function() {
    if (this.currentFrame.length === 1) {
      this.strike = true
      this.reset()
      this.strikeCount = 0 }
    else {
      this.spare = true }
}

Frame.prototype.reset = function() {
  this.turn = 0
  this.pins = 10
  this.metaFrame.push(this.currentFrame)
  this.currentFrame = []
};
