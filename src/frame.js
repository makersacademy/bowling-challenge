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

Frame.prototype.score = function() {
  var bonus;
  if(this.isStrike()) {

  }
  else if (this.isSpare()) {
    bonus = this.next.rollOne;
  }
  else {
    bonus = 0;
  }
  return (this.rollOne + this.rollTwo + bonus);

}
