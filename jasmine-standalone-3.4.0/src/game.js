'use strict';

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

var PERFECT_SCORE = 10;

// HELPER FUNCTIONS - CHECK FRAME COUNT AND GAME SCORES:
Game.prototype.checkFrameCount = function() {
  return this.frameCount;
};
Game.prototype.checkTotalScore = function() {
  return this.calculateTotalScore;
};
Game.prototype.checkBonus = function() {
  return this.calculateBonus;
};

// HELPER FUNCTIONS - CHECK SCORES PER ROLL:
Game.prototype.checkFirstRoll = function() {
  return this.firstRoll;
};
Game.prototype.checkSecondRoll = function() {
  return this.secondRoll;
};

// FUNCTIONALITY - CALCULATE SCORES PER ROLL AND FRAME:
Game.prototype.inputScore = function(roll) {
  if(this.firstRoll === 'TBC') {
    this.firstRoll = roll;
    this.holdFrameScore.push(this.firstRoll);
    var frameNumber = this.frameCount
    if(this.firstRoll === PERFECT_SCORE) {
      this.strikes.push(frameNumber);
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
    }
  } else if (this.secondRoll === 'TBC') {
    this.secondRoll = roll;
    this.holdFrameScore.push(this.secondRoll);
    var frameNumber = this.frameCount
    if(this.firstRoll + this.secondRoll === PERFECT_SCORE) {
      this.spares.push(frameNumber);
    };
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
};
