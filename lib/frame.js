module.exports = class Test {
  constructor (maxFramePins) {
    this._rolls = []
    this._maxFramePins = maxFramePins
  }

  roll (pinfall) {
    this._rolls.push(pinfall)
  }

  get pinfall () {
    return this._rolls.reduce((acc, val) => {
      return acc + val
    }, 0)
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
