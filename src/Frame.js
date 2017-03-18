'use strict';

function Frame (){
  this.frameScore = 0;
  this.rolls = [new Roll(), new Roll()];
}

Frame.prototype.getFrameScore = function(){
  return this.frameScore;
};

Frame.prototype.getRolls = function(){
  return this.rolls
};
