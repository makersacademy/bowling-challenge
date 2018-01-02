
function Game() {
  this.resetPins()
  this.round = 1
  this.bowlCount = 0
  this.strikes = 0
  this.spares = 0
  this.gameOver = false
  this.score = 0
  this.strikeInRoundTen = false
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
  return ((this.isStrikeOrSpare()) && (this.bowlCount === 1))
}

Game.prototype.strikeOrSpare = function() {
  if(this.strikeInRoundTen) {
    this.roundTenStrikeScore()
  } else {
    if(this.bowlCount === 1) {
      this.strikes++
      if(this.isRoundTen()) { this.strikeInRoundTen = true }
      this.updateRound()
    } else {
      this.spares++
    }
  }
}

Game.prototype.updateRound = function() {
  this.updateScore()
  if(!this.isRoundTen()) { this.round++ }
  this.bowlCount = 0
  this.resetPins()
}

Game.prototype.isNewRound = function() {
  if(!this.isRoundTen()) {
    return this.bowlCount === 2
  } else {
    this.isGameOver()
    return false
  }
}

Game.prototype.isGameOver = function() {
  if(this.spares === 1) {
    return
  } else if(this.bowlCount === 3){
    this.gameOver = true
    return
  } else if((this.bowlCount === 2)||(this.strikes == 2)) {
    this.updateScore()
    this.gameOver = true
    return
  }
}

Game.prototype.updateScore = function() {
  score = 10 - this.pins
  if((!this.strikeInRoundTen) || (this.isStrike())) { this.score += score }
  if(!this.isStrike()) {
    this.score += (this.strikes * score)
    if(!this.strikeInRoundTen) { this.strikes = 0 }
  }
}

Game.prototype.scoreSpare = function() {
  this.score += (10 - this.pins)
  this.spares = 0
}

Game.prototype.isRoundTen = function() {
  return this.round === 10
}

Game.prototype.roundTenStrikeScore = function() {
  this.updateScore()
  this.resetPins()
}
