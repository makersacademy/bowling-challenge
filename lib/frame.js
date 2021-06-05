module.exports = class Frame {
  constructor (maxFramePins = 10, maxFrameRolls = 2, bonusRollsOnStrike = 2, bonusRollsOnSpare = 1) {
    this._rolls = []
    this._bonusRolls = []
    this._maxFramePins = maxFramePins
    this._maxFrameRolls = maxFrameRolls
    this._bonusRollsOnStrike = bonusRollsOnStrike
    this._bonusRollsOnSpare = bonusRollsOnSpare
  }

  addRoll (pinfall) {
    this._rolls.push(pinfall)
  }

  addBonus (bonusPinfall) {
    if (this._isAwaitingBonus) {
      this._bonusRolls.push(bonusPinfall)
    }
  }

  get pinfall () {
    return this._rolls.reduce((acc, val) => {
      return acc + val
    }, 0)
  }

  get bonusPinfall () {
    return this._bonusRolls.reduce((acc, val) => {
      return acc + val
    }, 0)
  }

  get score () {
    return this.pinfall + this.bonusPinfall
  }

  get numOfRolls () {
    return this._rolls.length
  }

  get isStrike () {
    return this._rolls[0] === this._maxFramePins
  }

  get isSpare () {
    return !this.isStrike && this.pinfall === this._maxFramePins
  }

  get _isAwaitingBonus () {
    if (this.isStrike) {
      return this._bonusRolls.length < this._bonusRollsOnStrike
    } else if (this.isSpare) {
      return this._bonusRolls.length < this._bonusRollsOnSpare
    } else {
      return false
    }
  }

  get isOver () {
    return this.numOfRolls === this._maxFrameRolls
  }

  get isFinalized () {
    return (this.numOfRolls === this._maxFrameRolls && !this.isSpare) || ((this.isStrike || this.isSpare) && !this._isAwaitingBonus)
  }
}
