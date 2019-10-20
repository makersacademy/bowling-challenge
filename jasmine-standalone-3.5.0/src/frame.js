'use strict';

function Frame(number){
  this.NUMBER = number
  this.POINTS = 0
  this.roll1 = 0
  this.roll2 = 0
}

Frame.prototype.returnpoints = function(){
  return this.POINTS
}
