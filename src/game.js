'use strict';

function Game() {
  this.rolls = [];
  this.result = 0;
  this.pinTally = 0;
  this.currentScore = 0
};

//TODO: NEED EDGECASE FOR MORE THAN TEN
//assign a variable firstroll, second roll, if first roll > 10 reject, if second roll + first roll > 10 reject. 
//does this go in score or in the pinsdown/roll/gettally etc?

Game.prototype.pinsDown = function(pins) {
  return pins;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.getTally = function() {
  return this.pinTally;
};

Game.prototype.tally = function(pins) {
  return this.pinTally += pins;
};

Game.prototype.score = function() {
  var rollIndex = 0;
  var game = this;

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  };

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  };

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  };

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  };

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  };

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (isStrike()) {
        this.result += getStrikeScore();
        this.currentScore = getStrikeScore();
        rollIndex++;
      } else if (isSpare()) {
        this.result += getSpareScore();
        this.currentScore = getSpareScore();
        rollIndex += 2;
      } else {
      this.result += getNormalScore();
      this.currentScore = getNormalScore();
      rollIndex += 2;
      }
  }
  return this.result;
};
