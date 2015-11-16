'use strict';

function Roll(){
  this._remainingPins = 10;
  this._knockedDownPins = 0;
  this._rollNumber = 1;
}

Roll.prototype.pinNumber = function(){
  return this._remainingPins;
};

Roll.prototype.rollNumber = function(){
  return this._rollNumber;
};

Roll.prototype.knockedDownPins = function(){
  if (this._rollNumber === 1) {this.knockedDownPinsFirstRoll();
    return this._knockedDownPins;}
  if (this._rollNumber === 2) {this.knockedDownPinsSecondRoll();
    return this._knockedDownPins;}
};

Roll.prototype.knockedDownPinsFirstRoll = function(){
  var randomizer = Math.random();
  if (randomizer <= 0.005) {this._knockedDownPins = 1;}
  if (randomizer > 0.005 && randomizer <= 0.01) {this._knockedDownPins = 2;}
  if (randomizer > 0.01 && randomizer <= 0.02) {this._knockedDownPins = 3;}
  if (randomizer > 0.02 && randomizer <= 0.03) {this._knockedDownPins = 4;}
  if (randomizer > 0.03 && randomizer <= 0.06) {this._knockedDownPins = 5;}
  if (randomizer > 0.06 && randomizer <= 0.11) {this._knockedDownPins = 6;}
  if (randomizer > 0.11 && randomizer <= 0.20) {this._knockedDownPins = 7;}
  if (randomizer > 0.20 && randomizer <= 0.43) {this._knockedDownPins = 8;}
  if (randomizer > 0.43 && randomizer <= 0.66) {this._knockedDownPins = 9;}
  if (randomizer > 0.66) {this._knockedDownPins = 10;}
  if (this._knockedDownPins != 10) {this._rollNumber = 2; this._remainingPins -= this._knockedDownPins;}
  if (this._knockedDownPins === 10) {this._rollNumber = 1; this._remainingPins = 10;}

};

Roll.prototype.knockedDownPinsSecondRoll = function(){
  this._knockedDownPins = this.secondRollRandomizer();
  this._remainingPins = 10;
  this._rollNumber = 1;
};

Roll.prototype.secondRollRandomizer = function(){
  return Math.floor(Math.random()*this._remainingPins);
};
