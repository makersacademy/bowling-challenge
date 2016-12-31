function Spare(){
  'use strict';
  this.bonus = 0;
}

Spare.prototype.addBonus = function(user_input){
  var pins = Number(user_input)
  this.bonus = pins
  return pins
};
