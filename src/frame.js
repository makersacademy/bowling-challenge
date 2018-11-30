'use strict';

function Frame(){
  this.rolls = [0, 0]
}

Frame.prototype.getRoll = function(number) {
  return this.rolls[number - 1];
}
