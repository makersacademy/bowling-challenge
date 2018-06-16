'use strict';

function Scoreboard(){
  this.frameScore = 0;
}

Scoreboard.prototype.getCurrentFrameScore = function() {
  return this.frameScore;
};

Scoreboard.prototype.addFirstRoll = function (roll) {
  this.frameScore += roll
  return this.frameScore;
};
