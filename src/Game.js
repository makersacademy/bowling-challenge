'use strict'

function Game() {
  this.frameCount = 0
  this.firstScore = 0
  this.secondScore = 0
  this.bonusScore = 0
  this.rackedPins = false
  this.sweepComplete = false
  this.bonusCount = 0
  this.bonusRollStatus = false
  this.scoreboard = new Scoreboard()
}

  Game.prototype.increaseFrameCount = function() {
    if (this.frameCount < 10) {
      this.frameCount ++
      return this._rackUp()
    } else if (this.frameCount === 10){
      return this._rollBonus()
    }
  }

  Game.prototype.rollOne = function(){
    if (this.rackedPins === true) {
      this.firstScore = Math.floor(Math.random() * this.setUpPins.length)
      this._sweepPins(this.firstScore)
      return this.scoreboard.scoreFirstRoll(this.firstScore)
    } else {
      throw new Error("Cannot Roll, Pins are not yet racked!")
    }
  }

  Game.prototype.rollTwo = function(){
    if (this.sweepComplete === true) {
      this.secondScore = Math.floor(Math.random() * this.setUpPins.length)
      return this.scoreboard.scoreSecondRoll(this.secondScore)
  } else {
    throw new Error("Cannot Roll, Pins are not yet racked!")
  }
}

  Game.prototype._rackUp = function(){
    if (this.frameCount <= 10) {
      this.rackedPins = true
      this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10]
    }
  }

  Game.prototype._sweepPins = function(score){
    this.sweepComplete = true;
    if (this.bonusRollStatus === false) {
      return this.setUpPins.splice(this.setUpPins.length-score, score)
    }
  }

  Game.prototype._rollBonus = function(){
      this.bonusCount ++
      if (this.bonusCount <= 2  && (this._isStrike() || this._isSpare())) {
        return this._rackRollBonus()
    } else {
      throw new Error("Game Over! Please start a new game")
    }
  }

  Game.prototype._rackRollBonus = function() {
    this.rackedPins = true
    return this.setUpPins = [0,1,2,3,4,5,6,7,8,9,10]
  }

  Game.prototype.rollBonus = function() {
    if (this.rackedPins === true)
    this.bonusScore = Math.floor(Math.random() * this.setUpPins.length)
    return game.scoreboard.scoreBonusRoll(this.bonusScore)
  }


  Game.prototype._isStrike = function() {
    return this.firstScore === 10
  }

  Game.prototype._isSpare = function() {
    this.bonusCount ++
    return this.firstScore + this.secondScore === 10
  }
