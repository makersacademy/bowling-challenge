function Roll(numberPins){
  'use strict'
  this._result = 0
  this._numberPins = numberPins
}

Roll.prototype.play = function(){
  this._result = Math.floor((Math.random() * this._numberPins + 1));
  return this._result
};
