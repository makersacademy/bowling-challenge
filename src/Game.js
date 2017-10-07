'use strict';

var Game = function(){
  this.rolls = [];
};

Game.prototype.roll = function(pins){
  this.rolls.push(pins);
};

Game.prototype.score = function(){
  var result = 0;
  var rollIndex = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    rollIndex +=2;
  }
  return result;
};
