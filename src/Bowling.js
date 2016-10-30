'use strict'

function Bowling (){
  this.score = 0;
};

Bowling.prototype.roll = function(roll){
  this.score += roll;
};

Bowling.prototype.yourScore = function(){
  return this.score;
}
