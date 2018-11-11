function Frame() {
  this.rolls = [];
  this.bonus = 0;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins)
  this.recordStrike(pins)
  this.recordSpare(pins)
  if (this.isFinished() === true) {
    if (this.isStrike === false && this.isSpare === false) {
      this.recordScore();
    }
  }
}

Frame.prototype.recordStrike = function(pins) {
  if (pins === 10) {
    this.rolls.push(0)
    this.isStrike = true
  }
}

Frame.prototype.recordSpare = function(pins) {
  if (pins < 10 && this.points() === 10) {
    this.isSpare = true
  }
}

Frame.prototype.firstRoll = function() {
  return this.rolls[0]
}

Frame.prototype.secondRoll = function() {
  return this.rolls[1]
}

Frame.prototype.points = function() {
  return this.rolls.reduce(add, 0)
}

function add(a, b) {
    return a + b
}

Frame.prototype.addBonus = function(pins) {
  this.bonus += pins;
}

Frame.prototype.isFinished = function() {
  if (this.rolls.length === 2) {
    return true
  } else {
    return false
  }
}

Frame.prototype.recordScore = function() {
  this.score = this.points() + this.bonus
}
