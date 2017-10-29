var Game = function () {
  this.currentFrame = 1
  this.currentRoll = 1
  this.currentScore = 0
  this.finalScore = null
  this.scorecard = {
    1: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    2: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    3: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    4: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    5: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    6: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    7: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    8: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    9: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    },
    10: {
      1: {hitPins: null, bonus: []},
      2: {hitPins: null, bonus: []},
      3: {hitPins: null, bonus: []},
      remainingPins: 10,
      frameScore: 0
    }
  }
}

Game.prototype.play = function () {
  var hitPins = this.bowl()
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
  for (frame in this.scorecard) {
    this.currentScore += this.scorecard[frame]['frameScore']
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
  for (frame of this.scorecard[this.currentFrame][this.currentRoll]['bonus']) {
    this.scorecard[frame]['frameScore'] += hitPins
  }
}

Game.prototype._getRemainingPins = function () {
  return (this.scorecard[this.currentFrame]['remainingPins'])
}

Game.prototype._updateScorecard = function (hitPins) {
  this.scorecard[this.currentFrame][this.currentRoll]['hitPins'] = hitPins
  this.scorecard[this.currentFrame]['remainingPins'] -= hitPins
  this.scorecard[this.currentFrame]['frameScore'] += hitPins
  if (this.currentFrame >= 2) this._addBonusPoints(hitPins)
}

Game.prototype._isAStrike = function () {
  return ((this.currentRoll === 1) && (this._isNoPins()))
}

Game.prototype._isNoPins = function () {
  return (this.scorecard[this.currentFrame]['remainingPins'] === 0)
}

Game.prototype._isASpare = function () {
  return ((this.currentRoll === 2) && (this._isNoPins()))
}

Game.prototype._addStrikeBonuses = function () {
  this.scorecard[this.currentFrame + 1][1]['bonus'].push(this.currentFrame)
  this.scorecard[this.currentFrame + 1][2]['bonus'].push(this.currentFrame)
  if (this.scorecard[this.currentFrame][2]['bonus'].length === 1) {
    this.scorecard[this.currentFrame + 1][1]['bonus'].push(this.scorecard[this.currentFrame][2]['bonus'].pop())
  }
}

Game.prototype._addSpareBonuses = function () {
  this.scorecard[this.currentFrame + 1][1]['bonus'].push(this.currentFrame)
}

Game.prototype._addSpareBonuses = function () {
  this.scorecard[this.currentFrame + 1][1]['bonus'].push(this.currentFrame)
}

Game.prototype._isRollOneStrike = function () {
  return (this.scorecard[10][1]['hitPins'] === 10)
}

Game.prototype._isThirdBall = function () {
  return ((this.currentRoll === 2) && ( (this._isNoPins()) || (this._isRollOneStrike()) ))
}

Game.prototype.lastFrame = function () {
  if (this._isAStrike()) this.scorecard[this.currentFrame]['remainingPins'] = 10
  if (this.currentRoll === 1) {
    this.currentRoll = 2
    return
  }
  if (this._isThirdBall()) {
  console.log(this._isRollOneStrike())
    this.currentRoll = 3
    if (this._isASpare()) this.scorecard[this.currentFrame]['remainingPins'] = 10
    return
  }
  this.finalScore = this.currentScore
}
