class Frame {
  constructor (rolls) {
    this._rolls = rolls

    if (rolls[0] === 10) {
      this._type = 'strike'
    } else if (rolls[0] + rolls[1] === 10) {
      this._type = 'spare'
    } else {
      this._type = 'open'
    }
  }

  outcome () {
    return this._rolls
  }

  type () {
    return this._type
  }
}

module.exports = Frame
