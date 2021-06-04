module.exports = class Test {
  constructor () {
    this._rolls = []
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
}
