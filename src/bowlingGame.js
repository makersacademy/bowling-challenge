"use strict";

function BowlingGame () {
  this.rolls = [];
  this.finished = false;
  this.numberOfRolls = 0;
};

BowlingGame.prototype.score = function (game) {
  return game.rolls.reduce((a, b) => a + b, 0);
};

BowlingGame.prototype.roll = function (pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown);
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
