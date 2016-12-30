'use strict';

function Strike(){
  this.bonus = [];
  this.count = 0;
};

Strike.prototype.addBonus = function(user_input){
  var pins = Number(user_input);
  this.bonus.push(pins);
  return this._sumBonus();
};

Strike.prototype.clearBonus = function(){
  if( this.bonus.length >= 2 ){ this.bonus = [] };
};

Strike.prototype._sumBonus = function(){
  var i;
  var sum = 0;
  for (i=0; i<this.bonus.length; i++){ sum = sum + this.bonus[i] }
  return sum
};
