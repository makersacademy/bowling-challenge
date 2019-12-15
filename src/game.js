'use strict';

function Game (){
  this.rolls = [];
};
Game.prototype.score = function(){
  debugger;
  var result = 0;
  var roll = 0;
  for(let frame=0; frame<10; frame++) {
    if(this.isSpare(roll)) {
      result += this.rolls[roll]+this.rolls[roll+1]+this.rolls[roll+2];
    }else{
      result += this.rolls[roll]+this.rolls[roll+1];
    }
    roll += 2;
  };
  return result;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.isSpare = function(roll) {
  return this.rolls[roll] + this.rolls[roll+1] == 10;
};