'use strict';

function Frame() {
  this.firstRoll = undefined
  this.secondRoll = undefined
  this.special = undefined
  this.isFinished = false
}

Frame.prototype.addRoll = function(number) {
  if(this.firstRoll === undefined) {
    this.addFirstRoll(number)
  } else {
    this.addSecondRoll(number)
  }
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
  if(this.firstRoll + this.secondRoll === 10) {this.special = 'spare'}
}
