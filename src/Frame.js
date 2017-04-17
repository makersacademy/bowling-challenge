"use strict";

function Frame() {
  this.remainingPins = 10;
  this.currentFrame = []
};

Frame.prototype.bowl = function() {
  if(this.currentFrame.length === 2){
    throw new Error("Cannot bowl, frame is complete")
  } else {
  var fallenPins = Math.floor((Math.random() * 11));
  this.remainingPins = this.remainingPins - (fallenPins);
  this.updateFrame();}
};

Frame.prototype.updateFrame = function() {
  if(this.currentFrame[0] === undefined && this.remainingPins !== 0) {
    this.currentFrame.push(10-this.remainingPins)}
  else if(
    this.currentFrame[0] === undefined && this.remainingPins === 0) {
    this.currentFrame.push(10, 0)}
  else {
    var previousBowl = this.currentFrame[0];
    this.currentFrame.push(10-(this.remainingPins + previousBowl))
  }
};
