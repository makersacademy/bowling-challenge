'use strict';

function Scoreboard(){
  this.frameScore = 0;
  this.gameScore = [];
}

Scoreboard.prototype.totalFrameScore = function() {
  return this.frameScore;
};

Scoreboard.prototype.addFirstRoll = function (roll) {
  this.frameScore += roll
  return this.frameScore;
};

Scoreboard.prototype.addSecondRoll = function (roll) {
  this.frameScore += roll
  return this.frameScore;
};
