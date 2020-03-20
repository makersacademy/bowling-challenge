function Frame() {
  this.frameScore = 0;
  this.rollOneValue = 0
}

Frame.prototype.rollOne = function(number) {
  this.frameScore += number
  this.rollOneValue += number
}

Frame.prototype.rollTwo = function(number) {
  this.frameScore += number;
}