'use strict';
var Game = function(){
  this.roundNumber = 0;
  this.score = 0;
  this.throwNumber = 1;
};

Game.prototype.nextRound = function() {
  this.roundNumber ++ ;
  this.throwNumber = 1;
};

Game.prototype.bowl = function(pins) {
  this.score += pins;
  this.throwNumber ++ ;
};
