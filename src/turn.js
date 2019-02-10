"use strict";

function Turn(firstBowl, secondBowl = 0, thirdBowl = null) {
  this.firstBowl = firstBowl;
  this.secondBowl = secondBowl;
  this.thirdBowl = thirdBowl;
}

Turn.prototype.isStrike = function() {
  return this.firstBowl === 10
}

Turn.prototype.printStrike = function() {
  if (this.isStrike){
    return 'X'
  }
}

Turn.prototype.isSpare = function() {
  return this.firstBowl + this.secondBowl === 10 && this.firstBowl != 10
}

Turn.prototype.printSpare = function() {
  if (this.isSpare){
    return `${this.firstBowl}, /`
  }
}
