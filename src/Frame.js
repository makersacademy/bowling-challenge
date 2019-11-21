'use strict';

function Frame(){
  this.MAX_ROLLS = 2;
  this.currentRoll = 0;
  this.rolls = [];
  this._frameScore = 0;
};

Frame.prototype.addRoll = function(pins){
  this.rolls.push(pins);
  this.setFrameScore();
};

Frame.prototype.getFrameScore = function(){
  return this._frameScore;
};

Frame.prototype.setFrameScore = function(){
  this._frameScore = this.rolls.reduce(function(acc, currentVal){
    return acc + currentVal;
  });
};