"use strict";

function Game(){
  this._rollScore = []
  this._frameScore = []
  this._pins = 10
}

Game.prototype.bowl = function (pins) {
    if (pins > this._pins) {
      throw "You can't hit more than 10 pins in each frame"
    }
    this._rollScore.push(pins);
    this._rollScore.length % 2 === 0 ? this.resetPins() : this.deductPins(pins);
};

Game.prototype.deductPins = function (pins) {
    this._pins -= pins;
};

Game.prototype.resetPins = function() {
  this._pins = 10;
};

Game.prototype.getIndex = function () {
  return this._rollScore.length - 1
};

Game.prototype.calFrameScore = function (index = this.getIndex()) {
  var score = this._rollScore[index] + this._rollScore[index - 1];
  this._frameScore.push(score);
};

Game.prototype.checkPins = function (index = this.getIndex()) {
  this._pins -= this._rollScore[index];
};

Game.prototype.isStrike = function (index = this.getIndex()) {
  return this._rollScore[index] === 10;
};


Game.prototype.isSpare = function () {
  this.calFrameScore();
  var index = this._frameScore.length - 1;
  return this._frameScore[index] === 10;
};
