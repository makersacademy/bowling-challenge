'use strict';

function Game (){
  this.rolls = [];
};

Game.prototype.score = function(){
  var i;
  var result = 0;
  for(i=0; i<20; i++) {
    result += this.rolls[i];
  };
  return result;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};