'use strict';

function Bowling(){
  this.score = 0;
};

Bowling.prototype.bowl = function () {
  var pinsKnockedDown = this._randomNum1to10();
  this.score += pinsKnockedDown;
};

Bowling.prototype.score = function () {
  return this.score;
};

Bowling.prototype._randomNum1to10 = function () {
  return Math.floor(Math.random() * 11);
};
