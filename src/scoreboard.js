'use strict';

function Scoreboard(){
  this.frameScore = 0;
}

Scoreboard.prototype.getCurrentFrameScore = function() {
  return this.frameScore;
};
