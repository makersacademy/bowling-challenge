"use strict";

function Roll(){
  this._MAXPINS = 10;
  this._MINPINS = 0;
};

Roll.prototype.validRoll = function(userThrow, pinsLeft){
  if(userThrow < this._MINPINS || userThrow > this._MAXPINS || userThrow > pinsLeft){
    throw new Error("this is an illegal roll");
} else{
  return true;
}

};
