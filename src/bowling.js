'use strict';
var Game = function(){
  this.roundNumber = 1;
  this.score = 0;
  this.throwNumber = 1;
  this.remainingPins = 10;
};

Game.prototype.nextRound = function() {
  if (this.roundNumber >= 10) {
    throw new Error("A game is only 10 rounds long");
  } else {
    this.roundNumber ++ ;
    this.throwNumber = 1;
    this.remainingPins = 10;
  }
};

Game.prototype.bowl = function(pins) {
  if (pins > this.remainingPins) {
    throw new Error("You can't bowl higher than the remaining pins");
  }
  if (pins === this.remainingPins) {
    this.nextRound();
  } else {
    this.remainingPins = 10 - pins;
    this.throwNumber ++ ;
    if (this.throwNumber >= 3) {
      this.nextRound();
    }
  }
  this.score += pins;
};
