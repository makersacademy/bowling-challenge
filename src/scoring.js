'use strict';

var BowlingGame = function() {
  this.rolls = []
  this.currentRoll = 0;
  this.currentFrame = 1;
  this.remainingPins = 10;
  this.ball = 1;
};

BowlingGame.prototype.roll = function(pins) {

  if (pins == 10) {
    this.currentFrame += 1;
  } else if (this.ball == 2) {
    this.currentFrame += 1;
    this.remainingPins = 10;
    this.ball -= 1;
  } else {
    this.remainingPins -= pins;
    this.ball += 1;
  }

  this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
  var score = 0;
  var frameIndex = 0;
  var self = this;

  function sumOfBallsInFrame() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
  }

  function spareBonus() {
    return self.rolls[frameIndex + 2];
  }

  function strikeBonus() {
    return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
  }

  function isSpare() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
  }

  function isStrike() {
    return self.rolls[frameIndex] === 10;
  }

  for(var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
      score += 10 + strikeBonus();
      frameIndex += 1;
    } else if (isSpare()) {
      score += 10 + spareBonus();
      frameIndex += 2;
    } else {
      score += sumOfBallsInFrame();
      frameIndex += 2;
    }
  }
  return score;
};

BowlingGame.prototype.currentScore = function() {
  return this.rolls.reduce(function(a,b) {
    return a + b;
  }, 0)
};

BowlingGame.prototype.random = function(min=0, max=this.remainingPins + 1) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
