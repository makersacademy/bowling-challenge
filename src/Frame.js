'use strict';

function Frame (){
  this.frameScore = 0;
  this.rolls = new Array(2);
}

Frame.prototype.getFrameScore = function(){
  return this.frameScore;
};

Frame.prototype.getRolls = function(){
  return this.rolls
};
