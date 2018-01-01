
function Game() {
  this.resetPins()
  this.round = 1
  this.bowlCount = 0
}

Game.prototype.knockDown = function(num) {
  this.pins -= num
  this.bowlCount++
  if(this.isNewRound()) { this.updateRound() }
}

Game.prototype.resetPins = function() {
  this.pins = 10
}

// Game.prototype.isStrike = function() {
//
// }

Game.prototype.updateRound = function() {
  this.round++
  this.bowlCount = 0
}

Game.prototype.isNewRound = function() {
  return this.bowlCount === 2
}
