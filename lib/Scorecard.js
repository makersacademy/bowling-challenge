function Scorecard () {
  this._total = 0
  this._rolls = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function () {
    if ((this.frames.length === 0) ||
        (this.frames[this.frames.length - 1].length === 2)) {
      this.frames.push([null])
    } else {
      this.frames[this.frames.length - 1].push(null)
    }
    this._rolls++
  },

  total: function () {
    return 0
  },

  isComplete: function () {
    return (this._rolls === 20)
  }
}

module.exports = Scorecard
