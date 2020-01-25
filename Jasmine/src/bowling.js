'use strict';

function Bowling(){
  this.score = 0

  Bowling.prototype.currentScore = function() {
    return this.score;
  }

}