'use strict';

function Frame(id){
  this.MAX_SCORE = 10;
  this.id = id;
  this.totalFrame = [];
}

Frame.prototype.inputBowls = function(first, second) {
  var pins = first + second;
  this.checkNumberOfPins(pins);
  this.totalFrame.push(first, second);
};

Frame.prototype.checkNumberOfPins = function(pins) {
  if (pins > this.MAX_SCORE) { throw new Error ("Score cannot be over 10"); }
};

Frame.prototype._firstRoll = function() {
  return this.totalFrame.reduce(function (first, second) {
    return first;
  });
};

Frame.prototype.isStrike = function() {
  return this._firstRoll() === this.MAX_SCORE;
};

Frame.prototype.isSpare = function() {
  return this.totalFrameScore() === this.MAX_SCORE;
};

Frame.prototype.totalFrameScore = function() {
  return this.totalFrame.reduce((first, second) => first + second);
};
