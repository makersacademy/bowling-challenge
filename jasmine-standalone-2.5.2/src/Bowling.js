'use strict';

function Bowling(){
  this.currentScore = 0
};

Bowling.prototype.throw = function(score){
  this.currentScore += score
};
