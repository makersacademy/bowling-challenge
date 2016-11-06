"use strict";

function Game () {
  this.roll = []
  this.frames = []
  this._rollsLeft = 20
  this._pins = 10
  this.index = 0
  this.score = 0
}

Game.prototype.bowl = function (pins) {
  if (this._rollsLeft > 0) {
    this.rollScore(pins);
    this.checkRollsLeft();
    this.checkPins(pins);
  } else {
    throw "Game has ended"
  }
};

Game.prototype.rollScore = function (pins) {
  this.roll.push(pins);
  if (pins === 10 && this.roll.length <18) {
    this.roll.push(0);
    this._rollsLeft --;
  }
};

Game.prototype.isTenthFrame = function () {
  return this.roll.length > 18;
};

Game.prototype.checkRollsLeft = function () {
  if (this.isTenthFrame()) {
    if (this.roll[18] === 10)  {
      this._rollsLeft ++;
    }
    if (this.roll[18] + this.roll[19] === 10) {
      this._rollsLeft ++;
    }
  }
  this._rollsLeft --;
};

Game.prototype.checkPins = function (pins) {
  this.roll.length % 2 === 0 ? this._pins = 10 : this._pins -= pins;
}

Game.prototype.notTenthFrame = function () {
  return this.index < 18
};

Game.prototype.calScore = function () {
  for (var i = 0; i < 9; i ++) {
    var index = this.index, roll = this.roll;
    //open frame
    if (roll[index] + roll[index + 1] < 10) {
      this.score += roll[index] + roll[index + 1];
      this.frames.push(this.score);
      this.index += 2;
    }

    //spare frame
    if (roll[index] + roll[index + 1] === 10 && roll[index] !== 10 && this.notTenthFrame()) {
      this.score += 10 + roll[index + 2];
      this.frames.push(this.score);
      this.index += 2;
    }

    //single strike frame
    if (roll[index] === 10 && roll[index + 2] !== 10 && roll[20] !== 10 && this.notTenthFrame()) {
      this.score += 10 + roll[index + 2] + roll[index + 3];
      this.frames.push(this.score);
      this.index += 2;
    }

    //double strike frame
    if (roll[index] === 10 && roll[index + 2] === 10 && this.notTenthFrame()) {
      this.score += 20 + roll[index + 4];
      this.frames.push(this.score);
      this.index += 2;
    }
  }
  this.calTenthFrame();
};

Game.prototype.calTenthFrame = function () {
  for (var i = 0; i < 2; i ++) {
    if (this.index >= 18 && this.index <21) {
      var index = this.index, roll = this.roll;
      this.score += roll[index];
      this.frames[9] = this.score;
      this.index += 1;
    }
  }
};

Game.prototype.bonusRoll = function () {
  var index = this.index, roll = this.roll;
  if (this.index >= 20) {
    this.score += roll[20];
    this.frames[9] = this.score;
  }
};
