'use strict';


function Frame() {
  this._frame = [];
};

Frame.prototype._roll = function() {
  return Math.floor(Math.random() * 10);
};

Frame.prototype.playFixedFrame = function(firstRoll, secondRoll) {
  this._frame = [firstRoll, secondRoll];
};

Frame.prototype.playRandomFrame = function() {
  var firstRoll = this._roll();
  var secondRoll = Math.min(this._roll(), 10 - firstRoll);
  return [firstRoll, secondRoll];
};

Frame.prototype.getFrame = function() {
  return this._frame;
};

Frame.prototype.getFrameScore = function() {
  return this._frame[0] + this._frame[1];
};

Frame.prototype.isStrike = function() {
  return this._frame[0] === 10;
};

Frame.prototype.isSpare = function() {
  return (this._frame[0] && this._frame[1]) < 10;
};
