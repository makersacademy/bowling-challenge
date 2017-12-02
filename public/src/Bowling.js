'use strict';

function BowlingScarecard() {
  this.ZERO = 0
  this.total = this.ZERO;
};

BowlingScarecard.prototype.roll = function(pins) {
  this.total += pins;
};
