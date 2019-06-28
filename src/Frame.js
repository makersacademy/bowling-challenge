"use strict";

function Frame(){
  this._pinsRemaining = 10;
};

Frame.prototype.roll = function(pinsKnocked, rollClass = new Roll()){
  var roll = rollClass;
  if(roll.validRoll(pinsKnocked, this._pinsRemaining)){
    this._pinsRemaining = this._pinsRemaining - pinsKnocked;
  };
};