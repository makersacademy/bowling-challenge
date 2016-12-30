'use strict';

function Spare(){
  this.count = 0;
  this.bonus = 0;
};

Spare.prototype.addBonus = function(user_input){
  var pins = Number(user_input)
  this.bonus = pins
  return pins
};
