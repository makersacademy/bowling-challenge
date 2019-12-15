'use strict';

function Game (){
  this.rolls = [];
};

Game.prototype.score = function(){
  var result = 0;
  var roll = 0;
  for(let frame=0; frame<10; frame++) {
    if(this.rolls[roll] + this.rolls[roll+1] == 10) {
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