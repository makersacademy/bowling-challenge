
function Game() {
  this.resetPins()
  this.round = 1
  this.bowlCount = 0
  this.strikes = 0
  this.spares = 0
}

Game.prototype.knockDown = function(num) {
  this.pins -= num
  this.bowlCount++
  if(this.isNewRound()) { this.updateRound() }
  if(this.pins === 0) { this.isStrikeOrSpare() }
}

Game.prototype.resetPins = function() {
  this.pins = 10
}

Game.prototype.isStrikeOrSpare = function() {
  if(this.bowlCount === 1) {
    this.strikes++
  } else {
    this.spares++
  }
}

Game.prototype.updateRound = function() {
  this.round++
  this.bowlCount = 0
}

Game.prototype.isNewRound = function() {
  return this.bowlCount === 2
}
