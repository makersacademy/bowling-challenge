function Scorecard() {
  this.frames = []
  this.score = 0
  this.bonus = []
  this.frame = new Frame()
  this.secondLastFrame = 0
  this.lastFrame = 0
  this.secondLastFrameRoll1 = 0
  this.secondLastFrameRoll2 = 0
  this.lastFrameRoll1 = 0
  this.lastFrameRoll2 = 0
}

Scorecard.prototype.add = function (number) {
  this.frame.add(number)
  if (this.frame.score.length === 2) {
    this.frames.push(this.frame.score)
    this.frame.score = []
    if (this.frames.length > 1) {
      this._updateSecondLastFrame()
    }
      this._updateLastFrame()
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
  if (this.secondLastFrameRoll1 === 10) {
    return this.bonus.push(this.lastFrame)
  }
  if ((this.secondLastFrameRoll2 + this.secondLastFrameRoll1) === 10) {
    this.bonus.push(this.lastFrameRoll1)
  }
}

Scorecard.prototype._isFirstStrike = function () {
  return this.lastFrameRoll1 === 10 && this.bonus.length === 0 && this.frames.length < 10
}

Scorecard.prototype._isNotFirstStrike = function () {
  return this.lastFrameRoll1 === 10 && this.frames.length < 10
}

Scorecard.prototype._isFirstSpare = function () {
  return (this.lastFrameRoll2 + this.lastFrameRoll1) === 10 && this.bonus.length === 0 && this.frames.length < 10
}

Scorecard.prototype._isNotFirstSpare = function () {
  return (this.lastFrameRoll2 + this.lastFrameRoll1) === 10 && this.frames.length < 10
}

Scorecard.prototype._updateSecondLastFrame = function () {
  this.secondLastFrame = this.frames[this.frames.length - 2]
  this.secondLastFrameRoll1 = this.secondLastFrame[this.secondLastFrame.length - 2]
  this.secondLastFrameRoll2 = this.secondLastFrame[this.secondLastFrame.length - 1]
}

Scorecard.prototype._updateLastFrame = function () {
  this.lastFrame = this.frames[this.frames.length - 1]
  this.lastFrameRoll1 = this.lastFrame[this.lastFrame.length - 2]
  this.lastFrameRoll2 = this.lastFrame[this.lastFrame.length - 1]
}


const add = (a, b) =>
  a + b
