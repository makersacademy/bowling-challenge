'use strict'

var Game = function() {
  this.rolls = []
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins)
}

Game.prototype.result =  function () {
  var score = 0
  var rollIndex = 0
  var that = this

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      score += bonusScore()
      rollIndex += 1
    } else if (isSpare()) {
      score += bonusScore()
      rollIndex += 2
    } else {
    score += noBonusScore()
    rollIndex += 2
    }
  }
  return score

  function firstRoll() {
    return that.rolls[rollIndex]
  }

  function noBonusScore() {
    return firstRoll() + addRollIndex(1)
  }
  
  function bonusScore() {
    return noBonusScore() + addRollIndex(2)
  }

  function isSpare() {
    return noBonusScore() == 10
  }

  function addRollIndex(increment) {
    return that.rolls[rollIndex + increment]
  }

  function isStrike() {
    return firstRoll() == 10
  }
}
