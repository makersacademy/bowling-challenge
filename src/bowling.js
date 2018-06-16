'use strict';

function Bowling(){
  this.score = 0;
  this.frameScore = 0;
  this._bowl = 0;
};

Bowling.prototype.bowl = function () {
  if(this._bowl === 2){
    this._bowl = 0
    this.frameScore = 0
  };
  this._bowl += 1
  var pinsKnockedDown = this._randomNum1to10();
  this.score += pinsKnockedDown;
  this.frameScore += pinsKnockedDown;
};

// Bowling.prototype.score = function () {
//   return this.score;
// };
//
// Bowling.prototype.frameScore = function () {
//   return this.frameScore;
// };

Bowling.prototype._randomNum1to10 = function () {
  return Math.floor(Math.random() * 11);
};
