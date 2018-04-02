'use strict'

function Frame(id){
  this.id = id;
  this.firstRoll = 0;
}

Frame.prototype.getID = function(){
  return this.id;
};

Frame.prototype.setFirstRoll = function(pins){
  this.firstRoll = pins;
};
