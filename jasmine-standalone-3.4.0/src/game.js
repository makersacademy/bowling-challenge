'use strict';

// NOTE - REFACTOR - Should below object be split up
// i.e. split into Game / Frame / Roll?
// Also - check for consistency in naming
// e.g. _frames vs. frameCount
function Game() {
  this.calculateTotalScore = 0;
  this._frames = [];
  this.frameCount = 1;
  this.firstRoll = 'TBC';
  this.secondRoll = 'TBC';
  this.holdFrameScore = [];
  this.spares = [];
  this.strikes = [];
}

// THIS VARIABLE IS USED TO IDENTIFY SPARES AND STRIKES
var PERFECT_SCORE = 10;

// GETTER FUNCTIONS:
Game.prototype.checkFrameCount = function() {
  return this.frameCount;
};
Game.prototype.checkTotalScore = function() {
  return this.calculateTotalScore;
};
Game.prototype.checkBonus = function() {
  return this.calculateBonus;
};
Game.prototype.checkFirstRoll = function() {
  return this.firstRoll;
};
Game.prototype.checkSecondRoll = function() {
  return this.secondRoll;
};

// FUNCTIONALITY - CALCULATE SCORES PER ROLL AND PER FRAME:
Game.prototype.inputScore = function(roll) {
  if(this.firstRoll === 'TBC') {
    this.firstRoll = roll;
    this.holdFrameScore.push(this.firstRoll);
    var frameNumber = this.frameCount
    if(this.firstRoll === PERFECT_SCORE) {
      this.strikes.push(frameNumber);
      this.endFrame();
    }
  } else if (this.secondRoll === 'TBC') {
    this.secondRoll = roll;
    this.holdFrameScore.push(this.secondRoll);
    var frameNumber = this.frameCount
    if(this.firstRoll + this.secondRoll === PERFECT_SCORE) {
      this.spares.push(frameNumber);
    };
  this.endFrame();
  };
};

Game.prototype.endFrame = function () {
  var totalScore = 0;
  this.holdFrameScore.forEach(function(score) {
    totalScore += score;
  });
  this.calculateTotalScore += totalScore;
  this._frames.push(this.holdFrameScore);
  this.frameCount += 1;
  this.firstRoll = 'TBC';
  this.secondRoll = 'TBC';
  this.holdFrameScore = [];
};
