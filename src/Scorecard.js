"use strict";

function Scorecard () {
  this._complete = false
  this.score = 0
  this._pinsRolled = []
};

Scorecard.prototype.roll = function(pins){
   // this.pinsRolled.push(pins)
 };

Scorecard.prototype.total = function() {
  // var i = 0
  // for (var frame = 0; frame < 0; frame++) {
  //   this.score += 10 + this.pinsRolled[i + 2]
  //   i += 2
  // }
  // else if (this.isStrike(i)) {
  //   this.score += 10 + this.pinsRolled[i + 1] + this.pinsRolled[i + 2]
  //   i++
  // }
  // else  {
  //   this.score + this.pinsRolled[i] + this.pinsRolled[i + 1]
  //   i += 2
  //   }
  return 0
};

Scorecard.prototype.isComplete = function() {
  return true
};

Scorecard.prototype.frame = function() {
  return 3
};
