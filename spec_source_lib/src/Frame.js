'use strict'

function Frame(roll1, roll2) {
  this.roll1 = roll1;
  this.roll2 = roll2;
  if (this.roll1 + this.roll2 > 10) {
  	throw "Invalid score! Can't knock down more than 10 per frame"
  }
}

Frame.prototype.score = function(){
  return (this.roll1 + this.roll2);
}