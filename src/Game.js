var Game = function () {
  this.currentFrame = 1
  this.currentRoll = 1
  this.currentScore = 0
  this.finalScore = null
  this.scorecard = new Scorecard()
}

Game.prototype.play = function (hitPins) {
  if (typeof this.finalScore === 'number') throw 'This game has ended'
  if (hitPins === undefined) var hitPins = this.bowl()
  if (hitPins > this.scorecard.frames[this.currentFrame].frame['remainingPins']) return "Too many pins"
  this._updateScorecard(hitPins)
  this._updateCurrentScore()
  if (this.currentFrame === 10) {
    this.lastFrame()
    return
  }
  if (this._isNoPins()) this.flagBonusRolls()
  this.setNextRoll()
}

Game.prototype._updateCurrentScore = function () {
  this.currentScore = 0
  for (frame in this.scorecard.frames) {
    this.currentScore += this.scorecard.frames[frame].frame['frameScore']
  }
}

Game.prototype.bowl = function () {
  return (Math.floor((Math.random() * this._getRemainingPins() + 1)))
}

Game.prototype.setNextRoll = function () {
  if ((this._isAStrike()) || (this.currentRoll === 2)) {
    this.currentFrame++
    this.currentRoll = 1
  } else {
    this.currentRoll = 2
  }
}

Game.prototype.flagBonusRolls = function () {
  (this.currentRoll === 1) ? this._addStrikeBonuses() : this._addSpareBonuses()
}

Game.prototype._addBonusPoints = function (hitPins) {
  for (frame of this.scorecard.frames[this.currentFrame].frame[this.currentRoll]['bonus']) {
    this.scorecard.frames[frame].frame['frameScore'] += hitPins
  }
}

Game.prototype._getRemainingPins = function () {
  return (this.scorecard.frames[this.currentFrame].frame['remainingPins'])
}

Game.prototype._updateScorecard = function (hitPins) {
  this.scorecard.frames[this.currentFrame].frame[this.currentRoll]['hitPins'] = hitPins
  this.scorecard.frames[this.currentFrame].frame['remainingPins'] -= hitPins
  this.scorecard.frames[this.currentFrame].frame['frameScore'] += hitPins
  if (this.currentFrame >= 2) this._addBonusPoints(hitPins)
}

Game.prototype._isAStrike = function () {
  return ((this.currentRoll === 1) && (this._isNoPins()))
}

Game.prototype._isNoPins = function () {
  return (this.scorecard.frames[this.currentFrame].frame['remainingPins'] === 0)
}

Game.prototype._isASpare = function () {
  return ((this.currentRoll === 2) && (this._isNoPins()))
}

Game.prototype._addStrikeBonuses = function () {
  this.scorecard.frames[this.currentFrame + 1].frame[1]['bonus'].push(this.currentFrame)
  this.scorecard.frames[this.currentFrame + 1].frame[2]['bonus'].push(this.currentFrame)
  if (this.scorecard.frames[this.currentFrame].frame[2]['bonus'].length === 1) {
    this.scorecard.frames[this.currentFrame + 1].frame[1]['bonus'].push(this.scorecard.frames[this.currentFrame].frame[2]['bonus'].pop())
  }
}

Game.prototype._addSpareBonuses = function () {
  this.scorecard.frames[this.currentFrame + 1].frame[1]['bonus'].push(this.currentFrame)
}

Game.prototype._addSpareBonuses = function () {
  this.scorecard.frames[this.currentFrame + 1].frame[1]['bonus'].push(this.currentFrame)
}

Game.prototype._isRollOneStrike = function () {
  return (this.scorecard.frames[10].frame[1]['hitPins'] === 10)
}

Game.prototype._isThirdBall = function () {
  return ((this.currentRoll === 2) && ( (this._isNoPins()) || (this._isRollOneStrike()) ))
}

Game.prototype.lastFrame = function () {
  if (this._isAStrike()) this.scorecard.frames[this.currentFrame].frame['remainingPins'] = 10
  if (this.currentRoll === 1) {
    this.currentRoll = 2
    return
  }
  if (this._isThirdBall()) {
    if (this._isASpare()) this.scorecard.frames[this.currentFrame].frame['remainingPins'] = 10
    this.currentRoll = 3
    return
  }
  this.finalScore = this.currentScore
}
