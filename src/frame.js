'use strict';

function Frame() {
  this.next = null;

  this.rollOne = null;
  this.rollTwo = null;

}

Frame.prototype.isStrike = function() {
  return (this.rollOne == 10);
}
