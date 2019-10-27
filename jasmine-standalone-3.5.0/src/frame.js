'use strict';

function Frame(number){
  this.NUMBER = number;
  this.BONUS = 0
  this.POINTS = 0;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.setbonus = function(bonus){
  this.BONUS = bonus;
};

Frame.prototype.addpoints = function(number){
  this.POINTS = this.POINTS + number
};

Frame.prototype.returnscore = function(){
  return this.POINTS + this.BONUS
}

Frame.prototype.firstroll = function(roll){
  if (roll.PINS === 10){
    this.strike = true

  }else {
    this.POINTS = roll.PINS};
};

Frame.prototype.secondroll = function(roll){
  if (roll.PINS + this.POINTS === 10){
    this.spare = true;

  }else {
  this.POINTS = roll.PINS + this.POINTS};
};
