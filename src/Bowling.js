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
  if (this.sumCurrent() == 10 && this.getFirstRoll() != 10){
    return true;
  };
  return false;
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
  if (this.getFirstRoll() == 10){
    return true;
  };
  return false;
};

Bowling.prototype.updateTotal = function(){
  if(this.isDoubleStrike()){
    if(this.isSpare()){
      return this.total += 40 + this.getFirstRoll();
    } else if(this.isStrike()){
      return this.total += 30;
    }
    return this.total += 30 + this.getFirstRoll() + this.sumCurrent() + this.sumCurrent();
  };
  if(this.isPrevSpare()){
    if(this.isStrike()){
      return this.total += 20;
    };
    return this.total += 10 + this.getFirstRoll() + this.sumCurrent();
  } else if(this.isPrevStrike()){
    if(this.isSpare()){
      return this.total += 20;
    } else if(!this.isStrike()){
      return this.total += 10 + this.sumCurrent() + this.sumCurrent();
    };
  };
  if(!this.isStrike() && !this.isSpare()){
    return this.total += this.sumCurrent();
  };
};

Bowling.prototype.isTenthFrame = function(){
  if(this.scorecard.length == 10){
    return true;
  };
  return false;
};

Bowling.prototype.tenthFrameUpdate = function(){
  if(this.isPrevSpare() && this.scorecard.length != 11){
    if(this.isSpare()){
      console.log("FirstRoll:" + this.getFirstRoll());
      return this.total += 20 + this.getFirstRoll();
    } else if (this.scorecard.length == 11){
      return this.total += this.getFirstRoll();
    } else {
      return this.total += 10 + this.getFirstRoll() + this.sumCurrent();
    };
  } else {
    if(this.doubleStrikeOnTenth()){
      return this.total += 20;
    } else if(this.isSpare()){
      return this.total += 10;
    } else if(!this.isSpare() && !this.isStrike() && this.firstThrow == true){
      return this.total += this.sumCurrent();
    };
    return this.total += this.getFirstRoll();
  };
};

Bowling.prototype.sumCurrent = function(){
  return this.scorecard[this.scorecard.length-1][0] + this.scorecard[this.scorecard.length-1][1];
};

Bowling.prototype.getFirstRoll = function(){
  return this.scorecard[this.scorecard.length-1][0];
};

Bowling.prototype.doubleStrikeOnTenth = function(){
  if(this.sumCurrent() == 20){
    return true;
  };
  return false;
}
