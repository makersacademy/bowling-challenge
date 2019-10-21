'use strict'

function Frame() {
  this.roll = [];
  this.inFrameScore = 0;
};

Frame.prototype.getRolls = function() {
  return this.roll;
}

Frame.prototype.getCurrentScore = function() {
  this.inFrameScore = this.calculateFrameScore()
  return this.inFrameScore
}

Frame.prototype.knockedDownPins = function(score){
  this.validateFrameLength();
  this.validateScore();
  if (score >= 10){
    this.roll.push(0);
  } else {
    this.roll.push(score);
  }
}

Frame.prototype.validateScore = function() {
  if ((this.calculateFrameScore > 10) && (this.roll.first !== 10)) {
    console.log("Only ten pins in lane")
  }
}

Frame.prototype.validateFrameLength = function() {
  if (this.roll.length >= 2) {
    console.log('Only two rolls allowed per frame')
    // return 'Only two rolls allowed per frame'
    return this.getRolls()
  }
}

Frame.prototype.calculateFrameScore = function(){
  return this.roll.reduce((a, b) => a + b, 0)
}

Frame.prototype.isStrike = function(){
    this.knockedDownPins === 10;
  }
