'use strict';

function BowlingGame() {
    this.frame = 1;
    this._rollNum = 1;
    this.score = 0;
  }


  BowlingGame.prototype.roll = function(score) {
    this.score += score;
};

module.exports = BowlingGame
