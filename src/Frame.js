'use strict'

function Frame() {
  this.roll = [];
  this.inFrameScore = 0;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.getRolls = function() {
  return this.roll;
}

Frame.prototype.getCurrentScore = function() {
  this.inFrameScore = this.calculateFrameScore()
  return this.inFrameScore
}

Frame.prototype.knockedDownPins = function(score){
  
  if (score <=10 && this.calculateFrameScore(score)<=10 && this.validateFrameLength()) {
    this.roll.push(score);
    this.isStrike();
    this.isSpare();
    return this.getCurrentScore();
  } else {
    return this.getCurrentScore();
  }
}

Frame.prototype.validateFrameLength = function() {
  if (this.roll.length >= 2) {
    console.log('Only two rolls allowed per frame')
    return false;
  } else {
    return true
  }
}

Frame.prototype.calculateFrameScore = function(num=0){
  return this.roll.reduce((a, b) => a + b, num);
}

Frame.prototype.isStrike = function(){
  if (this.roll[0] === 10){
    this.strike = true;
  } 
}

Frame.prototype.isSpare = function(){
  if (this.calculateFrameScore() === 10){
    this.spare = true;
  }
}