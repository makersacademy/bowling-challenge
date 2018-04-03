'use strict'

function Frame(id){
  this.id = id;
  this.firstRoll = 0;
  this.secondRoll = 0;
}

Frame.prototype.getID = function(){
  return this.id;
};

Frame.prototype.setFirstRoll = function(pins){
  this.firstRoll = pins;
};

Frame.prototype.getFirstRoll = function(){
  return this.firstRoll;
};

Frame.prototype.checkPinsExceeded = function(pins){
  if(this.firstRoll + pins > 10) {throw Error('A roll cannot exceed maximum of 10 pins')};
};

Frame.prototype.getSecondRoll = function(){
  return this.secondRoll;
};
