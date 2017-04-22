'use strict()';

function BonusRolls(num) {
  this._numberAllowed = num
  this._roll = 1
  this._pins = 10
  this._rollOnePoints = 0
  this._rollTwoPoints = 0
}

BonusRolls.prototype.roll = function() {
  var hit = this._hit()
  this._pins -= hit
  if(this._pins === 0) {
    this._pins = 10
  }
  this._roll === 1 ? this._rollOnePoints = hit : this._rollTwoPoints = hit
  this._numberAllowed -= 1
  this._roll += 1
}

BonusRolls.prototype.numberAllowed = function() {
  return this._numberAllowed
}


BonusRolls.prototype.points = function() {
  return this._rollOnePoints + this._rollTwoPoints
}

BonusRolls.prototype.number = function() {
  return this._roll
}

BonusRolls.prototype.pins = function() {
  return this._pins
}

BonusRolls.prototype.spareBonus = function() {
  return this._rollOnePoints
}

BonusRolls.prototype.strikeBonus = function() {
  return this._rollOnePoints + this._rollTwoPoints
}

BonusRolls.prototype.isFinished = function() {
  if(this._numberAllowed === 0) {
    return true
  } else {
    return false
  }
}

BonusRolls.prototype.bonusFeature = function() {
  return ''
}

BonusRolls.prototype._hit = function() {
  return Math.floor(Math.random() * (this._pins + 1))
}
