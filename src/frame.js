'use strict';

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

var Frame = function(){
  this._rolls = [];
  this._score = 0;
  this.MAX_SCORE = 10;
  this.bonus = 0;
};

Frame.prototype.firstRoll = function (pins) {
  if(this._rolls.length === 0 && this.bonus === 0){
    this._rolls.push(pins)
    this._score += pins
  }else if(this._rolls.length === 0 && this.bonus !== 0){
    this._rolls.push(pins)
    this._score += (pins * 2)
  }
  return;
};

Frame.prototype._secondRollAllowrence = function(){
  return this.MAX_SCORE - this._rolls[0]
};

Frame.prototype.secondRoll = function(pins){
  if(pins <= this._secondRollAllowrence() && this.bonus === 2){
    this._rolls.push(pins)
    this._score += (pins * 2)
  } else if(pins <= this._secondRollAllowrence()){
    this._rolls.push(pins)
    this._score += pins
  }
  return;
};

Frame.prototype.finalScore = function () {
  return this._score;
};

Frame.prototype.isStrike = function(){
  this._rolls[0] === this.MAX_SCORE
};

Frame.prototype.isSpare = function(){
  this._rolls[0] + this._rolls[1] === this.MAX_SCORE
};

Frame.prototype.addBonus = function(bonus){
  this.bonus += bonus
};
