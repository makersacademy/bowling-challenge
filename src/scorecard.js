function Scorecard() {
  this.frames = []
  this.score = 0
}

Scorecard.prototype.add = function (number) {
  this.frames.push(number)
  if (number === 10) {
    return this.frames.push(0);
  }
}

Scorecard.prototype.sum = function () {
  if (this.frames[this.frames.length - 1] === 0 ) {
    return this.score = this.frames.reduce(add) - 10;
  }
  this.score = this.frames.reduce(add)
}

const add = (a, b) =>
  a + b
