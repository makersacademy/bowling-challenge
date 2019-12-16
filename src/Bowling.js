'use strict';

function Bowling(){
  this.scorecard = [];
  this.total = 0;
  this.firstThrow = true;
};

Bowling.prototype.addScore = function(score){
  if(this.firstThrow){
    this.scorecard.push([score]);
  } else {
    this.scorecard[this.scorecard.length-1].push(score);
  };
  this.firstThrow = !this.firstThrow;
};

Bowling.prototype.isPrevSpare = function(){
  if(this.scorecard.length > 1){
    if(this.scorecard[this.scorecard.length-2][0] + this.scorecard[this.scorecard.length-2][1] == 10 && this.scorecard[this.scorecard.length-2][0] != 10){
      return true;
    };
  };
  return false;
};

Bowling.prototype.isSpare = function(){
  if (this.sumCurrent() == 10 && this.scorecard[this.scorecard.length-1][0] != 10){
    return true;
  } else {
    return false;
  };
};

Bowling.prototype.isDoubleStrike = function(){
  if(this.scorecard.length > 2){
    if(this.scorecard[this.scorecard.length-3][0] == 10 && this.isPrevStrike()){
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

Bowling.prototype.isStrike = function(){
  if (this.scorecard[this.scorecard.length-1][0] == 10){
    return true;
  } else {
    return false;
  };
};

Bowling.prototype.updateTotal = function(){
  if(!this.firstThrow){
    if(this.isDoubleStrike()){

    } else if(this.isPrevSpare()) {
      this.total += 10 + this.scorecard[this.scorecard.length-1][0];
    }
  } else {
    if(this.isPrevStrike()){

    } else if(!this.isSpare() && !this.isStrike()){
      this.total += this.sumCurrent();
    };
  };
};

Bowling.prototype.sumCurrent = function(){
  return this.scorecard[this.scorecard.length-1][0] + this.scorecard[this.scorecard.length-1][1];
};
