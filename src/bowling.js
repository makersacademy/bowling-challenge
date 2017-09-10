"use strict"

function BowlingGame() {
  this.score = 0
  this.frames = []
}

BowlingGame.prototype.roll = function (pins){
  var message = "You can not hit more than 10 pins in one roll"
  if (pins > 10) throw new Error(message);
  this.frames.push(pins);
};

BowlingGame.prototype.calculateScore = function (){
  var totalScore = 0;
  var rollIndex = 0;

  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      totalScore += strikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      totalScore += spareScore();
      rollIndex += 2;
    } else {
    totalScore += normalScore();
    rollIndex += 2;
  }

  }
  this.score = totalScore
  return totalScore


//refactoring

  function isStrike() {
    return game.frames[rollIndex] === 10;
  }

  function isSpare() {
    return game.frames[rollIndex] + game.frames[rollIndex+1] === 10;
  }

  function spareScore() {
    return (10 + game.frames[rollIndex + 2]);
  }

  function strikeScore() {
    return (10 + game.frames[rollIndex + 1] + game.frames[rollIndex + 2]);
  }

  function normalScore() {
    return game.frames[rollIndex] + game.frames[rollIndex+1];
  }

}

BowlingGame.prototype.resetGame = function() {
  this.score = 0;
  this.frames = []
};

// private for testing (helper)

BowlingGame.prototype.generateFrames = function(pins, rolls) {
  var count;
  for(count = 0; count < rolls; count++) {
    this.roll(pins)
  }

};
