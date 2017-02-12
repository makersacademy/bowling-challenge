function Roll(standingPins){
  'use strict'
  this._standingPins = standingPins
}

Roll.prototype._play = function(){
  return 4//Math.floor((Math.random() * (this._standingPins + 1)));
};
