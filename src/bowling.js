

var Bowling = function Bowling(){"use strict";
  this._frame = 1;
  this._roll = 1;
  this._score = 0;
  this._rollScore = 0;
  this._frameScore = 0;
  this.standingPins = 10;
};

Bowling.prototype = {
  bowl: function () {
    this._rollScore = this.pinsKnockdown();
    this.standingPins -= this.pinsKnockdown();
  },
};
 

Bowling.prototype.pinsKnockdown = function(){
  return Math.floor(Math.random() * 10);
}
