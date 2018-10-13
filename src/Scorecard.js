'use strict';

function Scorecard() {
  this.frameScore = [];
};

Scorecard.prototype.roll = function (knockedPins) {
  this.frameScore.push(knockedPins);
};
