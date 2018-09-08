'use strict';

function Bowling(){
  this.STRIKE = 10
  this.bowling_score = []
}

Bowling.prototype.roll = function(score){
  this.bowling_score.push(score);
};

Bowling.prototype.score = function(){
  return this.bowling_score.reduce((x, y) => x + y);
};

Bowling.prototype.isStrike = function(){
console.log(this);
  if (this.bowling_score[this.bowling_score.length-1] === 10){
    return true;
  } else
    return false;

};
