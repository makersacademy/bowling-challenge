'use strict';

function Bowlingcard () {
  this.score = 0;
  this.roll = 0;
}

Bowlingcard.prototype.enterScore = function(number) {
  this.score += number;
  this.roll++;
}
