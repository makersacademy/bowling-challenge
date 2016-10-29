'use strict';

function Scorecard(){
  this.total = 0;
  this.frame = 1;
}

Scorecard.prototype.getCurrentScore = function () {
  return this.total;
}

Scorecard.prototype.getCurrentFrame = function () {
  return this.frame;
}

module.exports = Scorecard;
