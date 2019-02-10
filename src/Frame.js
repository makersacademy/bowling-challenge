class Frame {
  constructor (rolls) {
    this._rolls = rolls

    if (rolls[0] === 10) {
      this._outcomeType = 'strike'
    } else if (rolls[0] + rolls[1] === 10) {
      this._outcomeType = 'spare'
    } else {
      this._outcomeType = 'open'
    }
  }

  outcome () {
    return this._rolls
  }

  outcomeType () {
    return this._outcomeType
  }
}

module.exports = Frame
