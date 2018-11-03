function Frame() {
  this.score = []
}

Frame.prototype.add = function (roll_score) {
  var roll = new Roll()
  roll.pins(roll_score)
  this.score.push(roll.score)
}
