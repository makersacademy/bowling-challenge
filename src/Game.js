
function Game() {
  this.resetPins()
  this.round = 1
  this.bowlCount = 0
  this.strikes = 0
  this.spares = 0
  this.gameOver = false
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
  if(this.round < 10) {
    return this.bowlCount === 2
  } else {
    this.isGameOver()
    return false
  }
}

Game.prototype.isGameOver = function() {
  if(this.bowlCount === 3) {
    this.gameOver = true
  } else if (this.strikes === 0 && this.spares === 0 && this.bowlCount === 2) {
    this.gameOver = true
  }
}
