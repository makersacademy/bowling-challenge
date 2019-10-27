function Round() {
  this.roll1 = 0
  this.roll2 = 0
  this.roll3 = 0
  this.currentScore = 0
  this.plus = ""
  this.currRoll = 1
};

Round.prototype.setRoll = function(value) {
  value = parseInt(value)
  if (value < 0 || value > 10 || isNaN(value)) {
    return "Something went wrong"
  }
  switch(this.currRoll) {
    case 1:
    this.roll1 = value
    break
    case 2:
    this.roll2 = value
    break
    case 3:
    this.roll3 = value
    break
  }
}

Round.prototype.countRoll = function() {
  this.currRoll += 1
}

Round.prototype.score = function() {
  console.log(this.roll1)
  console.log(this.roll2)
  this.currentScore = this.roll1 + this.roll2
  if (this.currentScore === 10) {
    this.setPlus()
  }
  return this.currentScore
}

Round.prototype.setPlus = function() {
  if (this.roll1 === 10 || this.roll2 === 10) {
    this.plus = "strike"
  } else {
    this.plus = "spare"
  }
}
