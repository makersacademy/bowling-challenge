"use strict";

function Game () {
  this.rollsLeft = 20
  this.roll = []
  this.frame = []
  this.pins = 10
  this.index = 0
  this.score = 0
}

Game.prototype.bowl = function (pins) {
  if (this.rollsLeft > 0) {
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
    this.rollsLeft --;
  }
};

Game.prototype.checkRollsLeft = function () {
  if (this.roll.length > 18) {
    if (this.roll[18] === 10)  {
      this.rollsLeft ++;
    }
  }

  if (this.roll.length > 18) {
    if (this.roll[18] + this.roll[19] === 10) {
      this.rollsLeft ++;
    }
  }
  this.rollsLeft --;
};

Game.prototype.checkPins = function (pins) {
  this.roll.length % 2 === 0 ? this.pins = 10 : this.pins -= pins;
}

Game.prototype.calScore = function () {
  for (var i = 0; i < 9; i ++) {
    var index = this.index, roll = this.roll;
      //open frame
      if (roll[index] + roll[index + 1] < 10) {
        this.score += roll[index] + roll[index + 1];
        this.frame.push(this.score);
        this.index += 2;
      }

      //spare frame
      if (roll[index] + roll[index + 1] === 10 && roll[index] !== 10 && index < 18) {
        this.score += 10 + roll[index + 2];
        this.frame.push(this.score);
        this.index += 2;
      }

      //single strike frame
      if (roll[index] === 10 && roll[index + 2] !== 10 && this.roll[20] !== 10 && index < 18) {
        this.score += 10 + roll[index + 2] + roll[index + 3];
        this.frame.push(this.score);
        this.index += 2;
      }

      //double strike frame
      if (roll[index] === 10 && roll[index + 2] === 10 && index < 18) {
        this.score += 20 + roll[index + 4];
        this.frame.push(this.score);
        this.index += 2;
      }
    }
    this.tenthFrame();
  };

Game.prototype.tenthFrame = function () {
for (var i = 0; i < 2; i ++) {
  if (this.index >= 18 && this.index <21) {
    var index = this.index, roll = this.roll;
      this.score += roll[index];
      this.frame[9] = this.score;
      this.index += 1;
  }
}
  };

Game.prototype.bonusRoll = function () {
    var index = this.index, roll = this.roll;
      if (this.index >= 20) {
        this.score += roll[20];
        this.frame[this.frame.length - 1] = this.score;
      }
    };
