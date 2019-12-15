'use strict';

function Bowling(){
  this.scorecard = [];
  this.total = 0;
  this.firstThrow = true;
};

Bowling.prototype.addScore = function(score){
  this.scorecard.push(score);
  this.firstThrow = !this.firstThrow;
};

Bowling.prototype.isPrevSpare = function(){
  if(this.scorecard.length > 1){
    if(this.scorecard[this.scorecard.length-2][0] + this.scorecard[this.scorecard.length-2][1] == 10){
      return true;
    };
  };
  return false;
};

Bowling.prototype.isPrevStrike = function(){
  if(this.scorecard.length > 1){
    if(this.scorecard[this.scorecard.length-2][0] == 10){
      return true;
    };
  };
  return false;
};

Bowling.prototype.isSpare = function(){
  if (this.scorecard[this.scorecard.length-1][0] + this.scorecard[this.scorecard.length-1][1] == 10){
    return true;
  } else {
    return false;
  };
};

Bowling.prototype.isStrike = function(){
  if (this.scorecard[this.scorecard.length-1][0] == 10){
    return true;
  } else {
    return false;
  };
};

Bowling.prototype.updateTotal = function(){
  if(!this.isPrevSpare() && !this.isPrevStrike()){
    if(!this.isSpare() && !this.isStrike()){
      if(!this.firstThrow){
        this.total += this.scorecard[this.scorecard.length-1][0] + this.scorecard[this.scorecard.length-1][1];
      };
    } else if(this.isSpare())
  } else if(this.isSpare()){
    this.total += 10 + this.scorecard[this.scorecard.length-1][0,'']
  };
};
