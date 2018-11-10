function Scorecard() {
  this.frames = []
  this.score = 0
  this.bonus = []
  this.frame = new Frame()
  this.secondLastArrayinArray = 0
  this.lastArrayinArray = 0
}

Scorecard.prototype.add = function (number) {
  this.frame.add(number)
  if (this.frame.score.length === 2) {
    this.frames.push(this.frame.score)
    this.frame.score = []
    if (this.frames.length > 1) {
      this.secondLastArrayinArray = this.frames[this.frames.length - 2]
    }
    this.lastArrayinArray = this.frames[this.frames.length - 1]
    this._addBonus()
  }
}

Scorecard.prototype.sum = function () {
  if (this.lastArrayinArray[this.lastArrayinArray.length - 2] === 10 && this.bonus.length === 0 && this.frames.length < 10) {
    return this.score = this.frames.flat().reduce(add) - 10
  }
  if (this.lastArrayinArray[this.lastArrayinArray.length - 2] === 10 && this.frames.length < 10) {
    return this.score = this.frames.flat().reduce(add) - 10 + this.bonus.flat().reduce(add)
  }
  if (((this.lastArrayinArray[this.lastArrayinArray.length - 1] + this.lastArrayinArray[this.lastArrayinArray.length - 2]) === 10) && this.bonus.length === 0 && this.frames.length < 10) {
    return this.score = this.frames.flat().reduce(add) - 10
  }
  if ((this.lastArrayinArray[this.lastArrayinArray.length - 1] +  this.lastArrayinArray[this.lastArrayinArray.length - 2]) === 10 && this.frames.length < 10) {
    return this.score = this.frames.flat().reduce(add) - 10 + this.bonus.flat().reduce(add)
  }
  if (this.bonus.length === 0) {
    return this.score = this.frames.flat().reduce(add)
  }
  this.score = this.frames.flat().reduce(add) + this.bonus.flat().reduce(add)
}

Scorecard.prototype._addBonus = function () {
  if (this.secondLastArrayinArray[this.secondLastArrayinArray.length - 2] === 10) {
    return this.bonus.push(this.lastArrayinArray)
  }
  if ((this.secondLastArrayinArray[this.secondLastArrayinArray.length - 1] + this.secondLastArrayinArray[this.secondLastArrayinArray.length - 2]) === 10) {
    this.bonus.push(this.lastArrayinArray[this.lastArrayinArray.length - 2])
  }
}


const add = (a, b) =>
  a + b
