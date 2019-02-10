class Frame {
  constructor (rolls) {
    this._rolls = rolls
  }

  outcome () {
    return this._rolls
  }
}

module.exports = Frame
