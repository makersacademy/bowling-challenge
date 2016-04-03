'use strict';

function Frame(final){
  this.round = [];
  // this.score = 0;
  this.pins = 10;
  this.ballsRolled = 0;
  this.frameComplete = false;
  this.finalFrame = final;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype.bowl = function(pins) {
  if(this.frameComplete) {
    throw new Error("Frame complete!");
  }
  this.addToBallsRolled(pins);
  this.knockPins(pins);
  this.checkForStrike();
  this.checkForSpare();
  if(this.isStrike === false && this.isSpare === false) {
    // this.score += pins;
    this.round.push(pins);
  }
}

Frame.prototype.knockPins = function(pins) {
  this.pins -= pins;
  if(this.pins === 0) {
    this.frameComplete = true;
  }
}

Frame.prototype.addToBallsRolled = function(pins) {
  this.ballsRolled += 1;
  if(this.finalFrame === false && this.ballsRolled === 2) {
    this.frameComplete = true;
  }
}

Frame.prototype.checkForStrike = function() {
  if(this.pins === 0 && this.ballsRolled === 1){
    this.frameComplete = true;
    this.round.push('X');
    this.isStrike = true;
  }
}

Frame.prototype.checkForSpare = function() {
  if(this.pins === 0 && this.ballsRolled === 2){
    this.frameComplete = true;
    this.round.push('/');
    this.isSpare = true;
  }
}
