function Score() {
  this.sum = 0
}

Score.prototype.roll = function(pins) {
  this.sum += pins
}

Score.prototype.total = function() {
  return this.sum
}
