'use strict';

function Game(){
  this.pins = 10;
  this.playerScore = 0;
  this.bonus = 0;
}


Game.prototype.getCurrentPinsStanding = function () {
  return this.pins;
};

Game.prototype.getCurrentPlayerScore = function () {
  return this.playerScore;
};

Game.prototype.getCurrentBonus = function () {
  return this.bonus
};
