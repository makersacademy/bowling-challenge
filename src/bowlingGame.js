'use strict';

function BowlingGame() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);

};

BowlingGame.prototype.score = function() {
	var score = 0;

  for (var i = 0; i < 20; i++) {
    score += this.rolls[i] ;
  }
	return score;
};
