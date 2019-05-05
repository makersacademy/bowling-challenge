'use strict';

function Frame() {
  this.firstRoll = undefined
  this.secondRoll = undefined
  this.thirdRoll = undefined
  this.special = undefined
  this.isFinished = false
}

Frame.prototype.addRoll = function(number) {
  if(this.special === 'final') { return this.addFinalRolls(number) }
  this.firstRoll === undefined ? this.addFirstRoll(number) : this.addSecondRoll(number)
  if(this.special === 'strike' || this.secondRoll !== undefined) {
    this.isFinished = true
  }
}

Frame.prototype.addFirstRoll = function(n) {
  this.firstRoll = n
  this.strike();
}

Frame.prototype.addSecondRoll = function(n) {
  this.secondRoll = n
  this.spare();
}

Frame.prototype.strike = function() {
  if(this.firstRoll === 10) { this.special = 'strike' }
}

Frame.prototype.spare = function() {
  this.firstRoll + this.secondRoll === 10 ? this.special = 'spare' : this.special = false
}

Frame.prototype.addFinalRolls = function(number) {
  if(this.firstRoll === undefined) { return this.firstRoll = number }
  if(this.secondRoll === undefined) {
    this.secondRoll = number;
    this.isFinished = this.endGame();
  } else {
    this.thirdRoll = number;
    this.isFinished = true;
  }
}

Frame.prototype.endGame = function() {
  if(this.firstRoll + this.secondRoll < 10) { return true }
}
