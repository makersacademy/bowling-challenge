'use strict';

function Frame(){
  this.totalFrame = [];
}

Frame.prototype.inputFirstBowl = function(pins) {
  this.checkNumberOfPins(pins);
  return this.totalFrame.push(pins);
};

Frame.prototype.inputSecondBowl = function(pins) {
  this.checkNumberOfPins(pins);
  return this.totalFrame.push(pins);
};

Frame.prototype.checkNumberOfPins = function(pins) {
  if (pins > 10) { throw new Error ("Score cannot be over 10"); }
};

Frame.prototype.isStrike = function(pins) {
  return pins === 10 ? true : false;
};

Frame.prototype.isSpare = function() {
  return this.totalFrame.reduce(function (first, second){
    return first + second === 10 ? true : false;
  });
};
