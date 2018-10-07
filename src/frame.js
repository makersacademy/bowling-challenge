'use strict';

function Frame(){
  this.rolls = [];
};

Frame.prototype.addRoll = function(roll) {
  if (this.rolls.length < 2) {
    this.rolls.push(roll);
  } else {
    throw new Error('This frame already contains two rolls');
  };
};
