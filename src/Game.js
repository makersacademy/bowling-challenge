
function Game() {
  this.resetPins()
  this.round = 1
  this.bowlCount = 0
  this.strikes = 0
  this.spares = 0
  this.gameOver = false
  this.score = 0
}

Game.prototype.knockDown = function(num) {
  this.pins -= num
  this.bowlCount++
  if(this.spares === 1) { this.scoreSpare() }
  if(this.isStrikeOrSpare()) { this.strikeOrSpare() }
  if(this.isNewRound()) { this.updateRound() }
}

Game.prototype.resetPins = function() {
  this.pins = 10
}

Game.prototype.isStrikeOrSpare = function() {
  return this.pins === 0
}

Game.prototype.isStrike = function() {
  return this.isStrikeOrSpare && this.bowlCount === 1
}

Game.prototype.strikeOrSpare = function() {
  if(this.bowlCount === 1) {
    this.strikes++
    this.updateRound()
  } else {
    this.spares++
  }
}

Game.prototype.updateRound = function() {
  this.updateScore()
  this.round++
  this.bowlCount = 0
  this.resetPins()
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

Game.prototype.updateScore = function() {
  score = 10 - this.pins
  this.score += score
  if(!this.isStrike()) {
    this.score += (this.strikes * score)
    this.strikes = 0
  }
}

Game.prototype.scoreSpare = function() {
  this.score += (10 - this.pins)
  this.spares = 0
}
