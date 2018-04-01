function Bonus() {
  this.firstBonus = 0
  this.secondBonus = 0
}

Bonus.prototype.calculate = function(first, second = 0) {
  this.reset()
  if (first === 10) {
    this.firstBonus = 1
    this.secondBonus = 1
  } else if (first + second === 10) {
    this.firstBonus = 1
  }
}

Bonus.prototype.reset = function() {
  this.firstBonus = 0
  this.secondBonus = 0
}
