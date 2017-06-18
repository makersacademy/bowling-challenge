'use strict';
// Frame is responsible for knocking down up to 10 pins

var Frame = function() {
  this.remainingPins = 10
  this.currentScore = 0
  this.ball = 0
  this.over = false;
}

Frame.prototype.bowl = function() {
  if ( this.ball === 1 ) {
    this.over = true;
  }
  var score = this.pinsKnockedDown(this.remainingPins);
  this._updateFrame(score);
  this._isStrike(score);
  this._isSpare(score);
  return score;
}

Frame.prototype.pinsKnockedDown = function(remainingPins) {
  return Math.floor((Math.random() * remainingPins) + 1);
}

Frame.prototype._updateFrame = function(score) {
  this.currentScore += score;
  this.remainingPins = 10 - score;
  this.ball += 1;
}

Frame.prototype._isStrike = function(score){
  if ( this.currentScore === 10 && this.ball === 1) {
    this.over = true;
  }
}

Frame.prototype._isSpare = function(score){
  if ( this.currentScore === 10 && this.ball === 2 ){
    this.over = true;
  }
}
