function Frame () {
  this.rollOne = undefined
  this.rollTwo = undefined
  this.score = undefined
  this.bonus = []
  this.isComplete = false
  this.isSpare = false
  this.isStrike = false
}

Frame.prototype.addRoll = function (num) {
  this._checkIfComplete()

  if (this.rollOne === undefined) {
    this._setRollOne(num)
  } else if (this.rollTwo === undefined) {
    this._setRollTwo(num)
    this._checkIfBonus()
  }
}

Frame.prototype.addBonus = function (num) {
  if (this.isComplete) return

  this.bonus.push(num)

  if (this.isSpare) {
    this._setAsComplete()
  }

  if (this.bonus.length === 2) {
    this._setAsComplete()
  }
}

Frame.prototype.calculateScore = function () {
  if (!this.isComplete) return

  this.score = this.rollOne + this.rollTwo

  if (this.bonus.length) {
    var bonus = this.bonus.reduce(function (total, num) {
      return total + num
    })
    this.score += bonus
  }
}

Frame.prototype.isFinishedRolling = function () {
  return this.rollTwo !== undefined
}

Frame.prototype._setAsComplete = function () {
  this.isComplete = true
}

Frame.prototype._checkNumber = function (num) {
  if (num > 10) {
    throw new Error('Number is higher than 10')
  } else if (num > (10 - this.rollOne)) {
    throw new Error('Score entered is higher than remaining pins')
  }
}

Frame.prototype._checkIfComplete = function () {
  if (this.isComplete) {
    throw new Error('Select the next frame. This frame is complete')
  }
}

Frame.prototype._checkIfSpare = function () {
  if (this.rollOne + this.rollTwo === 10) {
    this.isSpare = true
  }
}

Frame.prototype._setAsStrike = function () {
  this.isStrike = true
  this.rollTwo = 0
}

Frame.prototype._checkIfBonus = function () {
  if (!this.isSpare && !this.isStrike) {
    this._setAsComplete()
  }
}

Frame.prototype._setRollOne = function (num) {
  this._checkNumber(num)
  if (num === 10) this._setAsStrike()
  this.rollOne = num
}

Frame.prototype._setRollTwo = function (num) {
  this._checkNumber(num)
  this.rollTwo = num
  this._checkIfSpare()
}
