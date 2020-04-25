'use strict';

function Bowling(){
 this.scorecard = [];
 this.total = 0;
 this.bonus = 0;
 this.firstThrow = true;
};

Bowling.prototype.addScore = function(score){
  if(this.firstThrow == true && score == 10){
    this.scorecard.push([score]);
    this.scorecard[this.scorecard.length - 1].push(0);
    if(this.scorecard.length < 10){
      this.bonus += 2;
    };
  } else if (this.firstThrow == true){
    this.scorecard.push([score]);
    this.firstThrow = !this.firstThrow;
  } else {
    if(typeof(this.isRollValid(score)) == "number" ){
      if(this.getFirstRoll() + score == 10 && this.scorecard.length < 10){
        this.bonus += 1;
      };
      this.scorecard[this.scorecard.length - 1].push(score);
      this.firstThrow = !this.firstThrow;
    } else {
      return this.isRollValid(score);
    };
  };
};

Bowling.prototype.isRollValid = function(score){
  if(this.scorecard.length == 10){
    if(this.getFirstRoll() != 10 && this.getFirstRoll() + score > 10){
      return "Invalid Roll - can not hit more than 10 pins!"
    }
  }
  else if(this.getFirstRoll() != 10 && this.getFirstRoll() + score > 10){
    return "Invalid Roll - can not hit more than 10 pins!"
  };
  return score;
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

Bowling.prototype.sumCurrent = function(){
  return this.scorecard[this.scorecard.length-1][0] + this.scorecard[this.scorecard.length-1][1];
};

Bowling.prototype.getFirstRoll = function(){
  return this.scorecard[this.scorecard.length-1][0];
};

Bowling.prototype.updateTotal = function(){
  if(this.scorecard.length >= 10){
    this.updateTenthPlus();
    return;
  } else if(this.isDoubleStrike()){
   if(this.isStrike()){
     this.bonus -= 2;
     return this.total += 30;
   };
   this.bonus -= 4;
   return this.total += 10 + this.getFirstRoll() + 2 * this.sumCurrent();
 } else if(this.isPrevStrike()){
   if(this.isStrike()){
     return this.total += this.sumCurrent();
   };
   this.bonus -= 2;
   return this.total += 2 * this.sumCurrent();
 } else if(this.isPrevSpare()){
   this.bonus -= 1;
   return this.total += this.getFirstRoll() + this.sumCurrent();
 };
 return this.total += this.sumCurrent();
};

Bowling.prototype.updateTenthPlus = function(){
  if(this.bonus == 4){
    if(this.isStrike()){
      this.bonus -= 2;
      return this.total += 30;
    } else{
      this.bonus -= 4;
      return this.total += 10 + this.getFirstRoll() + 2 * this.sumCurrent();
    };
  } else if(this.bonus == 2){
    if(this.isStrike()){
      if(this.scorecard.length == 11){
        this.bonus -= 2;
        return this.total += 10 + 2 * this.getFirstRoll();
      };
      return this.total += 10;
    } else {
      this.bonus -= 2;
      return this.total += 2 * this.sumCurrent();
    };
  } else if(this.bonus == 1){
    this.bonus -= 1;
    return this.total += this.getFirstRoll() + this.sumCurrent();
  } else if(this.firstThrow == false){
    return this.total += this.getFirstRoll();
  } else {
    return this.total += this.sumCurrent();
  };
};
