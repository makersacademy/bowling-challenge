'use strict';

function Bowling() {
  this.STARTING_PINS = 10
  this.rolls = [];
}

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins)
};

Bowling.prototype.score =  function() {
  var result = 0
  var rollIndex = 0
  var bowling = this
  for (var frameIndex = 0; frameIndex < 10; frameIndex++){
    if (isSpare()){
      result = this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
    } else {
result += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
}
rollIndex += 2
}
return result

function isSpare() {
  return bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1] == 10
}
}

Bowling.prototype.randomScore = function() {
  return Math.floor((Math.random()) * 11);
}


Bowling.prototype.strikeScore = function() {

}

// for (var frameIndex = 0; frameIndex < 10; frameIndex++)

Bowling.prototype.spareScore = function() {

}

var rollMany = function (pins, rolls) {
  for (var i = 0; i < rolls; i++) {

  }
}

