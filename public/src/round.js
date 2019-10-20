function Round() {
  this.roll1 = 0
  this.roll2 = 0
  this.roll3 = 0
  this.currentScore = 0
  this.plus = ""
  this.bonus = 0
};

Round.prototype.setRoll1 = function(value) {
  value = parseInt(value)
  if (value < 0 || value > 10 || isNaN(value)) {
    return "You should input a valid value"
  }
  this.roll1 = value
}

Round.prototype.setRoll2 = function(value) {
  value = parseInt(value)
  if (value < 0 || value > 10 || isNaN(value)) {
    return "You should input a valid value"
  }
  this.roll2 = value
}

Round.prototype.setRoll3 = function(value) {
  value = parseInt(value)
  if (value < 0 || value > 10 || isNaN(value)) {
    return "You should input a valid value"
  }
  this.roll3 = value
}

Round.prototype.setPlus = function() {
  if (this.roll1 === 10 || this.roll2 === 10) {
    this.plus = "strike"
  } else if (this.roll1 + this.roll2 === 10) {
    this.plus = "spare"
  }
}

Round.prototype.score = function() {
  this.currentScore = this.roll1 + this.roll2
  if (this.currentScore === 10) {
    this.setPlus()
  }
  return this.currentScore
}
