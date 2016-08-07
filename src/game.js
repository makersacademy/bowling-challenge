'use strict';

var Game = function(){
  this.ALL_PINS = 10;
  this.rolls = [];
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins) {
    this.rolls[this.currentRoll++] = pins;
};

Game.prototype.gameTotal = function () {
  var sum = this.rolls.reduce((a,b) => a + b, 0);
  return sum;
};

Game.prototype.isStrike = function() {
  
};
