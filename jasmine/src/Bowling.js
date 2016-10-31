"use strict";

function Game () {
  this.roll = []
  this.score = 0
  this.pins = 10
  this.rollsLeft = 20
  this.idx = 0
}

Game.prototype.bowl = function (pins) {
  this.updateRoll(pins);
  this.checkPins(pins);
  this.rollsLeft -= 1;
  this.frameIndex();
};

Game.prototype.updateRoll = function (pins) {
  this.roll.push(pins);
  if (pins === 10 && this.roll.length % 2 !== 0){
     this.roll.push(0);
   }
};

Game.prototype.checkPins = function (pins) {
  this.roll.length % 2 === 0 ? this.pins === 10 : this.pins -= pins;
}

Game.prototype.frameIndex = function () {
  if (this.roll.length === 2) {
    this.frameOne();
  }
  if (this.roll.length > 2 && this.roll.length < 18 && this.roll.length % 2 === 0) {
    this.frameTypical();
  }
  // } else {
  //   this.frameTen();
  // }
};

Game.prototype.frameOne = function () {
  var index = this.idx;
  if (this.roll[index] + this.roll[index + 1] < 10) {
    this.score += this.roll[index] + this.roll[index + 1];
    this.idx += 2;
  } else {
    this.idx += 2;
  }
};

Game.prototype.frameTypical = function () {
  var index = this.idx;
  if (this.roll[index - 2] + this.roll[index - 1] < 10) {
    this.score += this.roll[index] + this.roll[index + 1];
    this.idx += 2;
  }
  if (this.roll[index - 2] === 10) {
    this.score += 10 + this.roll[index] + this.roll[index + 1];
    this.idx += 2;
  }

  if (this.roll[index - 2] + this.roll[index - 1] === 10 && this.roll[index - 2] !== 10) {
    this.score += 10 + this.roll[index];
  }
};
