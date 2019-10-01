function Game () {
  this._initialise()
}

Game.prototype = {
  constructor: Game,

  _initialise: function () {
    this.rolls = []
    this.frameScores = []
    this.runningTotals = []
    this._frameBall = 0
    this._currentRollStrike = false
    this._currentRollSpare = false
    this._lastRollStrike = false
    this._lastRollSpare = false
    this._lastButOneRollStrike = false
  },

  roll: function (roll) {
    if (this._isComplete()) {
      this._initialise()
    }

    this._updateStatus()

    this.rolls.push(roll)
    this._registerStrikeIfStrike()
    this._registerSpareIfSpare()

    this._checkIfFramesCanBeScored()

    if (this._isComplete()) {
      console.log('game complete')
    }

    return this.runningTotals
  },

  _updateStatus: function () {
    this._lastButOneRollStrike = this._lastRollStrike
    this._lastRollStrike = this._currentRollStrike
    this._currentRollStrike = false

    this._lastRollSpare = this._currentRollSpare
    this._currentRollSpare = false

    this._updateFrameBall()
  },

  _updateFrameBall: function () {
    if (this._lastRollStrike) {
      this._frameBall = 1
    } else {
      this._frameBall = (this._frameBall % 2) + 1
    }
  },

  _registerStrikeIfStrike: function () {
    if (this._frameBall === 1) {
      if (this._currentRoll() === 10) {
        console.log('strike')
        this._currentRollStrike = true
      }
    }
  },

  _registerSpareIfSpare: function () {
    if (this._frameBall !== 1) {
      if (this._currentRoll() + this._lastRoll() === 10) {
        console.log('spare')
        this._currentRollSpare = true
      }
    }
  },

  _checkIfFramesCanBeScored: function () {
    if (this._lastButOneRollStrike) {
      this._scoreFrame(this._lastButOneRoll() + this._lastRoll() + this._currentRoll())
    }
    if (this._lastRollSpare) {
      this._scoreFrame(this._lastButOneRoll() + this._lastRoll() + this._currentRoll())
    }
    if (this._frameBall === 2 && !this._currentRollSpare) {
      this._scoreFrame(this._lastRoll() + this._currentRoll())
    }
  },
  
  _scoreFrame: function (frameScore) {
    this.frameScores.push(frameScore)
    this.runningTotals.push(this._runningTotal() + frameScore)
  },

  _runningTotal: function () {
    if (this.runningTotals.length === 0) {
      return 0
    }
    return this.runningTotals[this.runningTotals.length - 1]
  },

  _currentRoll: function () {
    return this.rolls[this.rolls.length - 1]
  },

  _lastRoll: function () {
    return this.rolls[this.rolls.length - 2]
  },

  _lastButOneRoll: function () {
    return this.rolls[this.rolls.length - 3]
  },

  _isComplete: function () {
    return this.frameScores.length === 10
  }
}

