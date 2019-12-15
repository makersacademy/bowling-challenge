function Frame() {
  this._rolls = []
  this._frameEnded = false
  this._extras = 0
}

Frame.prototype.inputRoll = function(pins) {
  if(this._frameEnded) throw new Error ("Cannot Roll, frame has ended");
  else this._rolls.push(pins);
  this.isStrike()
  this.frameEndCheck()
}

Frame.prototype.score = function() {
  return this._rolls.reduce((a,b) => a + b, 0);
}

Frame.prototype.frameEndCheck = function() {
  if(this._rolls[this._rolls.length -1] === 10 || this._rolls.length === 2) {
    this._frameEnded = true
  }
}

Frame.prototype.isStrike = function () {
  if(this._rolls[this._rolls.length -1] === 10) {
    this._frameEnded = true
    this._extras = 2
  }
}

Frame.prototype.isEnded = function() {
  return this._frameEnded;
}

Frame.prototype.extras = function() {
  return this._extras
}

module.exports = Frame
