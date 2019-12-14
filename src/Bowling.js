'use strict';

function Bowling(){
  this.scores = [];
};

Bowling.prototype.addScore = function(score){
  this.scores.push(score);
};
