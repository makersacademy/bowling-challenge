'use strict';

function Frame() {
  this.next = null;

  this.rollOne = null;
  this.rollTwo = null;

}

Frame.prototype.isStrike = function() {
  return (this.rollOne == 10);
}

Frame.prototype.isSpare = function() {
  return (this.rollOne + this.rollTwo == 10 && !!this.rollTwo);
}
