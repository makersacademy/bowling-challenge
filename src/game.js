'use strict';

function Game(){

this._randRoll1 = 0;
this._randRoll2 = 0;
}

Game.prototype.generateRandRoll1 = function () {
  this._randRoll1 = Math.floor(Math.random() * 11) + 0;
};

Game.prototype.generateRandRoll2 = function () {
  this._randRoll2 = Math.floor(Math.random() * (10 - this._randRoll1) + 1)
};
