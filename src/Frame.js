'use strict';

function Frame(){
  this._rolls = [];
};

Frame.prototype.addRoll = function(roll){
  this._rolls.push(roll);
};

Frame.prototype.getRolls = function(){
  return this._rolls;
};
