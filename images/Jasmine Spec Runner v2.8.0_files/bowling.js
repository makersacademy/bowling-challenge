'use strict';

function Game() {
  this._player = 'Ollie'
  this._scoreSheet = [];
  this._totalScore = 0;  // consider calaculating score from summing score and bonus array
  this._frameAndRoll = [1,1];
};

Game.prototype.getTotalScore = function() {
  return this._totalScore;
};

Game.prototype.getScoreSheet = function() {
  return this._scoreSheet;
};

Game.prototype.roll = function(pins) {
  // if (this._frameAndRoll[1] = 1) {
  //   return Game.prototype.firstRoll(pins);
  // }
  // else if (this._frameAndRoll[1] = 2) {
  //   return Game.prototype.secondRoll(pins);
  // }
};
