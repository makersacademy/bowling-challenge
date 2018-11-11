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

Frame.prototype.isIncomplete = function(){
  if (this._rolls.length < 2) {
    return true;
  } else {
    return false;
  }
};
