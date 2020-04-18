'use strict';

function Bowlingcard () {
  this.score = 0;
}

Bowlingcard.prototype.enterScore = function(number) {
  this.score = number;
}
