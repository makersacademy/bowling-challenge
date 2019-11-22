'use strict';

function Frame(){
  this.MAX_ROLLS = 2;
  this.currentRollNumber = 0;
  this.rolls = [];
  this._frameScore = 0;
};

Frame.prototype.addRoll = function(pins){
  if (this.currentRollNumber === this.MAX_ROLLS) {
    throw "Frame Over"
  } else {
    this.rolls.push(pins);
    this.setFrameScore();
    this.currentRollNumber++;
  }
};

Frame.prototype.getFrameScore = function(){
  return this._frameScore;
};

Frame.prototype.setFrameScore = function(){
  this._frameScore = this.rolls.reduce(function(acc, currentVal){
    return acc + currentVal;
  });
};