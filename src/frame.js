'use strict';

function Frame() {
  this.next = null;
  this.previous = null;
  this.rollOne = null;
  this.rollTwo = null;
}

Frame.prototype.isStrike = function() {
  return (this.rollOne == 10);
}

Frame.prototype.isSpare = function() {
  return (this.rollOne + this.rollTwo == 10 && !!this.rollTwo);
}

Frame.prototype.getStrikeBonus = function() {
  if(this.isStrike()){
    return this.rollOne + this.next.rollOne;
  }
  else {
    return this.rollOne + this.rollTwo;
  }
}

Frame.prototype.getSpareBonus = function() {
  return this.rollOne;
}

Frame.prototype.score = function() {
  var bonus;
  if(this.isStrike()) {
    bonus = this.next.getStrikeBonus();
  } else if (this.isSpare()) {
    bonus = this.next.getSpareBonus();
  }  else {
    bonus = 0;
  }

  return (this.rollOne + this.rollTwo + bonus);
}
