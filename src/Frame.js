'use strict';


function Frame () {
  this._frame = [];
}


Frame.prototype.roll = function(pins){
  this._frame.push(pins);
};

Frame.prototype.calculateFrameScore = function(){
  return this._frame.reduce(function(total, num) {
    return total + num
  });
};
