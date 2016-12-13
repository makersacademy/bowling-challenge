'use strict';

function CalculatorTenPinsBowling() {
  this.gameScores  = []; //store [[ro11-1, roll-2, bonus]]
  this.frameScores = []; //store  [ro11-1, roll-2]
  this.roll  = 1;
  this.frame = 1;
  this.strike = false;
  this.spare  = false;
  this.strikeBonus  = []; //store bonus [ro11-1, roll-2]
  this.spareBonus   = 0;
  this.STRIKE_PINS  = 10;
};

CalculatorTenPinsBowling.prototype.passScore = function(pins){
  if( this.frameScores.length === 0 ){
    this.frameScores[0] = pins
    this.gameScores.push(this.frameScores)
  } else {
    this.frameScores[1] = pins
    this.gameScores[ this.frame - 1 ] = this.frameScores
  }
};

CalculatorTenPinsBowling.prototype.passStrike = function(){
  this.gameScores.push([ this.STRIKE_PINS, 0 ]);
};

CalculatorTenPinsBowling.prototype.passBonuses = function(){
  if( this.spare === true ){
    this.gameScores[ this.frame - 2 ][2] = this.spareBonus
  }
  if( this.strike === true ){
    var sumStrike = this.sumStrikeBonus();
    this.gameScores[ this.frame - 2 ][2] = sumStrike
  }
};

CalculatorTenPinsBowling.prototype.passStrikeBonus = function(pins){
  this.strikeBonus.length === 0 ? this.strikeBonus[0] = pins : this.strikeBonus[1] = pins
};

CalculatorTenPinsBowling.prototype.passSpareBonus = function(pins){
  this.spareBonus = pins;
};

CalculatorTenPinsBowling.prototype.sumStrikeBonus = function(){
  var i;
  var sum = 0;
  for (i=0; i<2; i++){ sum = sum + this.strikeBonus[i] }
  return sum
};

CalculatorTenPinsBowling.prototype.sumGameScores = function(){
  var i;
  var j;
  var sum = 0;

  for (i=0; i<this.gameScores.length; i++){
    for (j=0; j<this.gameScores[i].length; j++){
       sum += this.gameScores[i][j]
    }
  }
  return sum
};

CalculatorTenPinsBowling.prototype.changeRoll = function(){
  this.roll === 1 ? this.roll = 2 : this.roll = 1;
};

CalculatorTenPinsBowling.prototype.increaseFrame = function(){
  this.frame ++;
};

CalculatorTenPinsBowling.prototype.clearFrameScores = function(){
  this.frameScores = [];
};

CalculatorTenPinsBowling.prototype.setStrike = function(){
  this.strike = true;
};

CalculatorTenPinsBowling.prototype.setSpare = function(){
  this.spare = true;
};

CalculatorTenPinsBowling.prototype.clearStrike = function(){
  this.strike = false;
};

CalculatorTenPinsBowling.prototype.clearSpare = function(){
  this.strike = false;
};

CalculatorTenPinsBowling.prototype.isStrikeFlag = function(){
  return this.strike;
};

CalculatorTenPinsBowling.prototype.isSpareFlag = function(){
  return this.spare;
};
