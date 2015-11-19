'use strict';

function Frame(){
  this.rolls = 0;
  this.pins = 10;
  this.lastFrame = false;
}

Frame.prototype.roll = function(pinsDown){
  this.rolls++;
  this.pins -= pinsDown;
};

Frame.prototype.isOver = function() {
  if(this.lastFrame ){return this.isLastFrameOver()}
  return(this.rolls === 2) || (this.pins === 0);
};

Frame.prototype.isLastFrameOver = function() {
  return this.rolls === 3 || (this.pins > 0 && this.rolls === 2)
};

Frame.prototype.isStrike = function(){
  return(this.rolls === 1) && (this.pins === 0);
};

Frame.prototype.isSpare = function(){
  return(this.rolls === 2) && (this.pins === 0);
};
