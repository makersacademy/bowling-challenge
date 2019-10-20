function Frame() {
  this.score = 0
}

Frame.prototype.add = function(score) {
  this.score += score
}