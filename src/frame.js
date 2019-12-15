function Frame() {
  this._rolls = []
  this._numRolls = 2
  this._extrasRequired = 0
  this._extras = []
}

Frame.prototype.inputRoll = function(pins) {
  if(!this.canRoll()) throw new Error ("Cannot Roll, frame has ended");
  else {
    this._rolls.push(pins);
    this._numRolls--
    if(!this.isStrike()) this.isSpare()
  }
}

Frame.prototype.score = function() {
  var rollScore = this._rolls.reduce((a,b) => a + b, 0)
  var extraScore = this._extras.reduce((a,b) => a + b, 0)
  return (rollScore + extraScore);
}

Frame.prototype.isStrike = function () {
  if(this._rolls[this._rolls.length - 1] === 10) {
    this._numRolls = 0
    this._extrasRequired = 2
    return true
  }
}

Frame.prototype.isSpare = function () {
  if(this._rolls.reduce((a,b) => a + b, 0) === 10) {
    this._extrasRequired = 1
    return true
  }
}

Frame.prototype.canRoll = function() {
  return !!this._numRolls;
}

Frame.prototype.numExtras = function() {
  return this._extrasRequired
}

Frame.prototype.inputExtra = function(pins) {
  this._extras.push(pins)
  this._extrasRequired--
}

Frame.prototype.closed = function() {
  return !this._numRolls && !this._extrasRequired
}

module.exports = Frame
