function Frame() {
  this.frameScore = 0
}

Frame.prototype.rollOne = function(number) {
  this.frameScore += number
}

Frame.prototype.rollTwo = function(number) {
  this.frameScore += number;
}