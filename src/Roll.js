'use strict';

function Roll(score){
  this._score = score;
};

Roll.prototype.getScore = function(){
  return this._score;
};
