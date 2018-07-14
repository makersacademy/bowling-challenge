'use strict';

function Scorecard() {
  this.totalScore = 0;
  this.frame = []
};

Scorecard.prototype.roll = function(pins){
  this.frame.push(pins)

};
