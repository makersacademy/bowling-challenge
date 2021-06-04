module.exports = class Test {
  constructor (maxFramePins) {
    this._rolls = []
    this._bonusRolls = []
    this._maxFramePins = maxFramePins
  }

  roll (pinfall) {
    this._rolls.push(pinfall)
  }

  addBonus (bonusPinfall) {
    this._bonusRolls.push(bonusPinfall)
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
}
