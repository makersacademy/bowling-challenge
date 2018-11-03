function Frame() {
  this.score = []
}

Frame.prototype.add = function (roll) {
  this.score.push(roll)
}
