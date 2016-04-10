'use strict';

function Frame(final){
  this.round = [];
  this.score = 0;
  this.pinsRemaining = 10;
  this.ballsRolled = 0;
  this.frameComplete = false;
  this.finalFrame = typeof final !== 'undefined' ? final : false;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype.bowl = function(pins) {
  if(this.frameComplete) {
    throw new Error("Frame complete!");
  }
  this.knockPins(pins);
  this.addToBallsRolled(pins);
  this.checkForStrike();
  this.checkForSpare();
  if(this.isStrike === false && this.isSpare === false) {
    this.score += pins;
    this.round.push(pins);
  }
}

Frame.prototype.knockPins = function(pins) {
  if ((this.pinsRemaining - pins) < 0) {
  throw new Error('Cannot knock down more than 10 pins!');
}
  this.pinsRemaining -= pins;
  if(this.pinsRemaining === 0) {
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
  if(this.pinsRemaining === 0 && this.ballsRolled === 1){
    this.frameComplete = true;
    this.round.push('X');
    this.isStrike = true;
  }
}

Frame.prototype.checkForSpare = function() {
  if(this.pinsRemaining === 0 && this.ballsRolled === 2){
    this.frameComplete = true;
    this.round.push('/');
    this.isSpare = true;
  }
}
