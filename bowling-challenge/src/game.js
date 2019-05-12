'use strict'

function Game(){
  this.currentFrame = []
  this.frames = []
  this.ball1Pins = 0
  this.ball2Pins = 0
};

Game.prototype.ball1 = function(pins){
  this.currentFrame.push(pins);
  this.ball1Pins = pins
};

Game.prototype.ball2 = function(pins){
  this.currentFrame.push(pins);
  this.ball2Pins = pins
  if (this.framesPlayed() === 9 && (this.ball1Pins + this.ball2Pins) === (10 || 20)) {
    return
  } else {
    this.endFrame();
  }
};

Game.prototype.ball3 = function(pins){
  this.currentFrame.push(pins);
  this.endFrame();
};

Game.prototype.framesPlayed = function() {
  return this.frames.length;
};

Game.prototype.endFrame = function () {
  this.frames.push(this.currentFrame);
  this.currentFrame = [];
};

// Game.prototype.bonusBall = function () {
//   var frame10 = this.frameTenCalc()
//   return this.framesPlayed === 9 && (frame10 === (10 || 20))
// };
//
// Scorecard.prototype.frameTenCalc = function () {
//   var reducer = (total, score) => total + score;
//   return this.currentFrame.reduce(reducer)
// };
