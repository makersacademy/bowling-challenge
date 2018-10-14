function indivFrame() {
  this.rolls = []
}

indivFrame.prototype.add = function(roll) {
  this.rolls.push(roll)
}

// refactor
indivFrame.prototype.isFull = function() {
  if (this.rolls.length > 1 || this.allKnocked())  {
    return true
  } else {
    return false
  }
}

indivFrame.prototype.allKnocked = function() {
  return this.sum() > 9
}

indivFrame.prototype.reset = function() {
  this.rolls = []
}

indivFrame.prototype.sum = function() {
  var sum = 0
  for (var i = 0; i < this.rolls.length; i++) {
    sum += this.rolls[i]
  }
  return sum
}
