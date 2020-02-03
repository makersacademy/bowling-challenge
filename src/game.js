'use strict';

function Game() {
  this.frames = [];
  this.rolls = [];
  this.total = 0;
  this.frameScore = 0;
  this.rollOne = 0;
}

Game.prototype.totalScore = function() {
  var sum = this.frames.reduce((a, b) => a + b, 0)
  this.total = sum
  return this.total;
};

Game.prototype.newFrame = function(rollOne, rollTwo) {
  var score = rollOne + rollTwo;
  this.rollOne = rollOne;
  this.rolls.push([rollOne, rollTwo]);
  this.frameScore = score;
  this.frames.push(this.frameScore)
  return this.frameScore;
};

Game.prototype.currentPosition = function() {
  return this.frames.length ;
};

Game.prototype.addBonus = function() {
  if (this.rolls[this.currentPosition() - 2][0] === 10) {
    return this.frames[this.currentPosition() - 2] += this.frameScore;
  } else if (this.frames[this.currentPosition() - 2] === 10) {
    return this.frames[this.currentPosition() - 2] += this.rollOne;
  } else {
    return null;
  }
};
