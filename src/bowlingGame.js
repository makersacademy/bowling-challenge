"use strict";

function BowlingGame () {
  this.frame = [];
  this.score = 0;
  this.finished = false;
  this.numberOfRolls = 0;
};

BowlingGame.prototype.roll = function (pinsKnockedDown) {
  this.addToFrame(pinsKnockedDown);
  this.countRoll();
  return pinsKnockedDown;
};

BowlingGame.prototype.countRoll = function () {
  if (this.numberOfRolls < 19) {
    this.numberOfRolls++;
  } else {
    this.finished = true;
  };
};

BowlingGame.prototype.addToFrame = function (pinsKnockedDown) {
  this.frame.push(pinsKnockedDown);
};
