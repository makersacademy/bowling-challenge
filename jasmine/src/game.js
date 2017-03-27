'use strict'

const frames = 10

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

  for (var frameIndex = 0; frameIndex < frames; frameIndex++) {
    if (isStrike()) {
      whichBonusScore(1)
    } else if (isSpare()) {
      whichBonusScore(2)
    } else {
    score += noBonusScore()
    rollIndex += 2
    }
  }
  return score

  function isSpare() {
    return noBonusScore() == 10
  }

  function isStrike() {
    return addRollIndex(0) == 10
  }

  function addRollIndex(increment) {
    return that.rolls[rollIndex + increment]
  }

  function noBonusScore() {
    return addRollIndex(0) + addRollIndex(1)
  }

  function bonusScore() {
    return noBonusScore() + addRollIndex(2)
  }

  function whichBonusScore(number){
    score += bonusScore()
    rollIndex += number
  }
}
