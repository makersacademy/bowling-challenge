function Frame () {
  this.roll_one = 0
  this.roll_two = 0
}

Frame.prototype.add_roll_one_score = function (score) {
  this.roll_one = score
}

Frame.prototype.add_roll_two_score = function (score) {
  this.roll_two = score
}

Frame.prototype.isStrike = function() {
  return this.roll_one === 10
}

Frame.prototype.isSpare = function () {
  return this.isStrike() === false && this.roll_one + this.roll_two === 10
}
