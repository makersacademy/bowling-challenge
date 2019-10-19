function Round() {
  this.roll1 = 0
  this.roll2 = 0
  this.tot = 0
  this.plus = ""
};

Round.prototype.setRoll1 = function(value) {
  if (value < 0 || value > 10) {
    return "You should input a valid value"
  }
  this.roll1 = parseInt(value)
}

Round.prototype.setRoll2 = function(value) {
  this.roll2 = parseInt(value)
}

Round.prototype.setPlus = function() {
  if (this.roll1 === 10 || this.roll2 === 10) {
    this.plus = "strike"
  } else if (this.roll1 + this.roll2 === 10) {
    this.plus = "spare"
  }
}

Round.prototype.total = function() {
  this.tot = this.roll1 + this.roll2
  if (this.tot === 10) {
    this.setPlus()
  }
  return this.tot
}
