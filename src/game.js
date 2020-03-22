'use strict';

function Game() {
  this.rolls[]
  this.currentRoll = 0;

}

Game.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};
