'use strict'

function Frame () {
  this.scores = []
}

Frame.prototype.addScore = function (score) {
  if (this.scores.length < 3) {
    this.scores.push(score)
  }
}
module.exports = Frame
