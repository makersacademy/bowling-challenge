function Game() {

  this.score = 0
}

// Game.prototype.getScore = function() {

// }

Game.prototype.roll = function(pins) {
  this.score += pins
}

Game.prototype.returnScore = function() {
  return this.score === 0 ? 'Jeez!' : this.score
}