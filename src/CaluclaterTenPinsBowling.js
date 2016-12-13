'use strict';

function CaluclaterTenPinsBowling() {
  this.gameScores  = {};
  this.frameScores = [];
  this.roll  = 1;
  this.frame = 1;
  this.strike = false;
  this.spare  = false;
  this.strikeBounus = [];
  this.spareBounus  = 0;
  this.STRIKE_PINS  = 10;
};

CaluclaterTenPinsBowling.prototype.passScore = function(pins){
  if( this.frameScores.length === 0 ){
    this.frameScores[0] = pins
  } else {
    this.frameScores[1] = pins
    this.gameScores[ this.frame ] = this.frameScores
  }
};

CaluclaterTenPinsBowling.prototype.passStrikeBounus = function(pins){
  this.strikeBounus.length === 0 ? this.strikeBounus[0] = pins : this.strikeBounus[1] = pins
};

CaluclaterTenPinsBowling.prototype.passSpareBounus = function(pins){
  this.spareBounus = pins;
};

CaluclaterTenPinsBowling.prototype.passStrike = function(){
  this.gameScores[ this.frame ] = [ this.STRIKE_PINS, "-" ];
};

CaluclaterTenPinsBowling.prototype.changeRoll = function(){
  this.roll === 1 ? this.roll = 2 : this.roll = 1;
};

CaluclaterTenPinsBowling.prototype.increaseFrame = function(){
  this.frame ++;
};

CaluclaterTenPinsBowling.prototype.clearFrameScores = function(){
  this.frameScores = [];
};

CaluclaterTenPinsBowling.prototype.setStrike = function(){
  this.strike = true;
};

CaluclaterTenPinsBowling.prototype.setSpare = function(){
  this.spare = true;
};

CaluclaterTenPinsBowling.prototype.clearStrike = function(){
  this.strike = false;
};

CaluclaterTenPinsBowling.prototype.clearSpare = function(){
  this.strike = false;
};

CaluclaterTenPinsBowling.prototype.isStrikeFlag = function(){
  return this.strike;
};

CaluclaterTenPinsBowling.prototype.isSpareFlag = function(){
  return this.spare;
};
