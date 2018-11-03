function Scorecard() {
  this.frames = []
  this.score = 0
}

Scorecard.prototype.add = function (frame) {
  this.frames.push(frame)
}

Scorecard.prototype.sum = function () {
  if (this.frames[this.frames.length - 1].includes(10)) {
    return this.score = this.frames.flat().reduce(add) - 10;
  }
  this.score = this.frames.flat().reduce(add)
}

const add = (a, b) =>
  a + b
