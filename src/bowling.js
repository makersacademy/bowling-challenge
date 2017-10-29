'use strict';

function Game() {
  this._player = 'Ollie'
  this._scoreSheet = [];
  this._totalScore = 0; // consider calaculating score from summing score and bonus array
  this._frameAndRoll = [1, 1];
  this._wasStrike = false;
  this._wasSpare = false;
};

Game.prototype.getTotalScore = function() {
  return this._totalScore;
};

Game.prototype.getScoreSheet = function() {
  return this._scoreSheet;
};

Game.prototype.roll = function(roll) {
  this._frameAndRoll[1] === 1 ? this.firstRoll(roll) : this.secondRoll(roll);
  this.rollType(roll);
  this.updateFrameAndRoll(roll);
};

Game.prototype.firstRoll = function(roll) {
  this._totalScore += roll;
  this._scoreSheet.push(roll);
};

Game.prototype.secondRoll = function(roll) {
  this._totalScore += roll;
  this._scoreSheet.push(roll);
};

Game.prototype.updateFrameAndRoll = function(roll) {
  if (this._frameAndRoll[1] === 2 || roll === 10) {
    this._frameAndRoll[0] += 1;
  } else {
    this._frameAndRoll[1] += 1;
  }
};

Game.prototype.rollType = function(roll) {
  if (roll === 10) {
    this._wasStrike = true;
  }
  if ((this._frameAndRoll[1] === 2) && (this._scoreSheet.pop() + roll === 10)) {
    this._wasSpare = true;
  }
};
