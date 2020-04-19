'use strict';

function Bowlingcard () {
  this.score = 0;
  this.roll = 0;
  this.frame = 0;
}

Bowlingcard.prototype.enterScore = function(number) {
  this.score += number;
  this.roll++;
}

Bowlingcard.prototype.frameCount = function() {
  if (this.roll > 0 && this.roll <= 2) {
    this.frame = 1;
  } else if (this.roll > 2 && this.roll <=4) {
    this.frame = 2;
  }
}