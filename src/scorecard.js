function Scorecard() {
  this.frames = []
  this.score = 0
  this.bonus = []
  this.frame = new Frame()
  this.secondLastFrame = 0
  this.lastFrame = 0
}

Scorecard.prototype.add = function (number) {
  this.frame.add(number)
  if (this.frame.score.length === 2) {
    this.frames.push(this.frame.score)
    this.frame.score = []
    if (this.frames.length > 1) {
      this.secondLastFrame = this.frames[this.frames.length - 2]
    }
    this.lastFrame = this.frames[this.frames.length - 1]
    this._addBonus()
  }
}

Scorecard.prototype.sum = function () {
  if (this._isFirstStrike()) {
    return this.score = this.frames.flat().reduce(add) - 10
  }
  if (this._isNotFirstStrike()) {
    return this.score = this.frames.flat().reduce(add) - 10 + this.bonus.flat().reduce(add)
  }
  if (this._isFirstSpare()) {
    return this.score = this.frames.flat().reduce(add) - 10
  }
  if (this._isNotFirstSpare()) {
    return this.score = this.frames.flat().reduce(add) - 10 + this.bonus.flat().reduce(add)
  }
  if (this.bonus.length === 0) {
    return this.score = this.frames.flat().reduce(add)
  }
  this.score = this.frames.flat().reduce(add) + this.bonus.flat().reduce(add)
}

Scorecard.prototype._addBonus = function () {
  if (this.secondLastFrame[this.secondLastFrame.length - 2] === 10) {
    return this.bonus.push(this.lastFrame)
  }
  if ((this.secondLastFrame[this.secondLastFrame.length - 1] + this.secondLastFrame[this.secondLastFrame.length - 2]) === 10) {
    this.bonus.push(this.lastFrame[this.lastFrame.length - 2])
  }
}

Scorecard.prototype._isFirstStrike = function () {
  return this.lastFrame[this.lastFrame.length - 2] === 10 && this.bonus.length === 0 && this.frames.length < 10
}

Scorecard.prototype._isNotFirstStrike = function () {
  return this.lastFrame[this.lastFrame.length - 2] === 10 && this.frames.length < 10
}

Scorecard.prototype._isFirstSpare = function () {
  return ((this.lastFrame[this.lastFrame.length - 1] + this.lastFrame[this.lastFrame.length - 2]) === 10) && this.bonus.length === 0 && this.frames.length < 10
}

Scorecard.prototype._isNotFirstSpare = function () {
  return (this.lastFrame[this.lastFrame.length - 1] +  this.lastFrame[this.lastFrame.length - 2]) === 10 && this.frames.length < 10
}


const add = (a, b) =>
  a + b
