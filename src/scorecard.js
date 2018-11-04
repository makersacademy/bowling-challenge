function Scorecard() {
  this.frames = []
  this.score = 0
  this.bonus = []
}

Scorecard.prototype.add = function (number) {
  this.frames.push(number)
  if (number === 10) {
    return this.frames.push(0);
  }
  this._addBonus()
}

Scorecard.prototype.sum = function () {
  if ((this.frames[this.frames.length - 1] === 0 || this.frames[this.frames.length - 2] === 0) && this.bonus.length === 0) {
    return this.score = this.frames.reduce(add) - 10
  }
  if (this.frames[this.frames.length - 1] === 0 || this.frames[this.frames.length - 2] === 0) {
    return this.score = this.frames.reduce(add) - 10 + this.bonus.reduce(add)
  }
  if (((this.frames[this.frames.length - 1] + this.frames[this.frames.length - 2]) === 10) && this.bonus.length === 0) {
    return this.score = this.frames.reduce(add) - 10
  }
  if ((this.frames[this.frames.length - 1] + this.frames[this.frames.length - 2]) === 10) {
    return this.score = this.frames.reduce(add) - 10 + this.bonus.reduce(add)
  }
  if (this.bonus.length === 0) {
    return this.score = this.frames.reduce(add)
  }
  this.score = this.frames.reduce(add) + this.bonus.reduce(add)
}

Scorecard.prototype._addBonus = function () {
  if (this.frames[this.frames.length - 3] === 0) {
    this.bonus.push(this.frames[this.frames.length - 1])
    return this.bonus.push(this.frames[this.frames.length - 2])
  }
  if ((this.frames[this.frames.length - 3] + this.frames[this.frames.length - 4]) === 10) {
    this.bonus.push(this.frames[this.frames.length - 1])
  }
}


const add = (a, b) =>
  a + b
