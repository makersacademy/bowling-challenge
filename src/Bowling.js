function Bowling () {
  this.rolls = []
}
Bowling.prototype.roll = function (pins) {
  this.rolls.push(pins)
}
Bowling.prototype.score = function () {
  var result = 0
  var rollIndex = 0
  var bowling = this
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      result += getSpareScore()
    } else {
      result += getNormalScore()
    }
    rollIndex += 2
  }
  return result

  function isSpare () {
    return bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1] === 10
  }

  function getSpareScore () {
    return bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1] + bowling.rolls[rollIndex + 2]
  }

  function getNormalScore () {
    return bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1]
  }
}
