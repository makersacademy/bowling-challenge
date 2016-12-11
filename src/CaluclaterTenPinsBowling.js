'use strict';

function CaluclaterTenPinsBowling() {
  this.gameScores  = {};
  this.frameScores = [];
  this.roll  = 1;
  this.frame = 1;
  this.strike = false;
  this.STRIKE_PINS = 10;
};


CaluclaterTenPinsBowling.prototype.passScore = function(pins){
  if( this.frameScores.length === 0 ){
    this.frameScores[0] = pins
  } else {
    this.frameScores[1] = pins
    this.gameScores[ this.frame ] = this.frameScores
  }
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
