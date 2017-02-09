function Roll(standingPins){
  'use strict'
  this._standingPins = standingPins
}

Roll.prototype.play = function(){
  return Math.floor((Math.random() * (this._standingPins + 1)));
};
