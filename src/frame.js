'use strict';

function Frame(){
  this.rolls = [];
};

Frame.prototype.addRoll = function(roll) {
  this.rolls.push(roll)
};
