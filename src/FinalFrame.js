function FinalFrame () {
  this.bonus = []
  this.rollThree = undefined
}

FinalFrame.prototype = new Frame()

FinalFrame.prototype.addRoll = function (num) {
  this._checkIfComplete()

  if (this.rollOne === undefined) {
    this._setRollOne(num)
  } else if (this.rollTwo === undefined) {
    this._setRollTwo(num)
  } else if (this._isBonus()) {
    this._setRollThree(num)
  }
}

FinalFrame.prototype._setAsStrike = function () {
  this.isStrike = true
}

FinalFrame.prototype._checkIfStrike = function (num) {
  if (num === 10) {
    this.isStrike = true
  }
}

FinalFrame.prototype._checkRemainingPins = function (num) {
  if (this.rollOne !== 10) this._checkNumber(num)
}

FinalFrame.prototype._setRollTwo = function (num) {
  this._checkRemainingPins(num)
  this.rollTwo = num
  this._checkIfSpare()
  this._checkIfBonus()
}

FinalFrame.prototype._setRollThree = function (num) {
  this.bonus.push(num)
  this.rollThree = num
  this._setAsComplete()
}

FinalFrame.prototype.isFinishedRolling = function () {
  return this.rollThree !== undefined
}

FinalFrame.prototype._isBonus = function () {
  if (this.isSpare || this.isStrike) return true
}
