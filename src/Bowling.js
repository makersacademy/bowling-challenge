'use strict'

function Bowling (){
  this.score = 0;
};

Bowling.prototype.first_throw = function(){
  return this.score;
};

Bowling.prototype.your_score = function(){
  return this.score;
}
