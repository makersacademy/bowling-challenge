"use strict"


function Bowling(frames) {
  this.rolls = [];
  this.frames = frames
  this.gameOver = false
}

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins)
}

Bowling.prototype.endGame = function() {
  if (this.frames = 10) {
    this.gameOver = true
  }
}

Bowling.prototype.score =  function() {
  var result = 0
  var rollIndex = 0
  var bowling = this
  for (bowling.frames = 0; bowling.frames < 10; bowling.frames++){
    if (isStrike()) {
      result += getStrikeScore()
      rollIndex++
    } else if (isSpare()){
      result += getSpareScore()
      rollIndex += 2
    } else {
      result += getNormalScore()
      rollIndex += 2
    }
  }
  return result


  function isStrike() {
    return bowling.rolls[rollIndex] === 10
  }

  function getStrikeScore() {
   return bowling.rolls[rollIndex]+
   bowling.rolls[rollIndex + 1]+
   bowling.rolls[rollIndex + 2]
 }

 function isSpare() {
  return bowling.rolls[rollIndex] +
  bowling.rolls[rollIndex + 1] === 10
}

function getSpareScore() {
  return bowling.rolls[rollIndex]+
  bowling.rolls[rollIndex + 1] +
  bowling.rolls[rollIndex + 2]
}

function getNormalScore() {
  return bowling.rolls[rollIndex] +
  bowling.rolls[rollIndex + 1]
}


var rollMany = function (pins, rolls) {
  for (var i = 0; i < rolls; i++) {
  }
}
}





