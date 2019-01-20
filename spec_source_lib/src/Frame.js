'use strict'

function Frame(roll1, roll2) {
  this.roll1 = roll1;
  this.roll2 = roll2;
}

Frame.prototype.score = function(){
  return (this.roll1 + this.roll2);
}	