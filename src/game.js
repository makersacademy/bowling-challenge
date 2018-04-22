function isItStrike(attempt) {
  return attempt === 10
}

function isItSpare(frame) {
  return frame === 10
}
Game.prototype.spareBonus = function() {
  this.bonus += 1
}

Game.prototype.resetFrame = function() {
  this.frame = 0
}

Game.prototype.strikeBonus = function() {
  if (this.bonus === 1) {
    this.bonus += 1
    this.doublebonus += 1
  }
  else
    this.bonus += 2
}
Game.prototype.scoreForThrow = function(attempt) {
  if (this.doublebonus === 1) {
    this.score += attempt * 3
    this.doublebonus = 0
    this.bonus -= 1
  }
  else if (this.bonus >= 1) {
    this.score += attempt * 2
    this.bonus -= 1
  }
  else
    this.score += attempt
}
function Game() {
  this.score = 0
  this.bonus = 0
  this.doublebonus = 0
  this.frame = 0
  this.round = 0
  this.badluck = false
}
Game.prototype.lastRound = function() {
  if (this.round === 10) {
    if (this.doublebonus > 0){
        this.doublebonus = 0
    }
    else
        this.bonus = 0
    }
  else if (this.round === 11) {
    this.doublebonus = 0
    this.bonus = 0
  }
}
Game.prototype.roll = function(result) {
  var currentFrame = this.frame + result
  if (isItStrike(result)) {
    this.scoreForThrow(result)
    this.strikeBonus()
    this.round += 1
    this.lastRound()
  }
  else if (isItSpare(currentFrame)) {
    this.scoreForThrow(result)
    this.spareBonus()
    this.round += 1
    this.resetFrame()
    this.lastRound()
  }
  else if (result === 0) {
    this.badluck = true
    this.scoreForThrow(result)
    this.lastRound()
      }
  else
    if (this.frame > 0) {
    this.resetFrame()
    this.scoreForThrow(result)
    this.round += 1
    this.lastRound()
    }
    else {
      if (this.badluck) {
        this.resetFrame()
        this.scoreForThrow(result)
        this.badluck = false
        this.round += 1
        this.lastRound()
      }
      else {
        this.frame += result
        this.scoreForThrow(result)
        this.lastRound()
      }

    }
}
