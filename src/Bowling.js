'use strict';

function Bowling(){
  this.scorecard = [];
};

Bowling.prototype.addScore = function(score){
  this.scorecard.push(score);
};

Bowling.prototype.isSpare = function(){
  if (this.scorecard[this.scorecard.length-1][1] === '/'){
    return true;
  } else {
    return false;
  };
};
