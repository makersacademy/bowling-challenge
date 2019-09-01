'use strict';

function Game() {
  this.calculateTotalScore = 0;
  this._frames = [];
  this.frameCount = 1;
}

function Frame() {
  this.firstRoll = 'TBC';
  this.secondRoll = 'TBC';
}

var frameScoreHolder = [];

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
Frame.prototype.checkFirstRoll = function() {
  return this.firstRoll;
};
Frame.prototype.checkSecondRoll = function() {
  return this.secondRoll;
};

// FUNCTIONALITY - CALCULATE SCORES PER ROLL AND FRAME:
Frame.prototype.inputScore = function(roll) {
  if(this.firstRoll === 'TBC') {
    this.firstRoll = roll;
    frameScoreHolder.push(this.firstRoll);
  } else if (this.secondRoll === 'TBC') {
    this.secondRoll = roll;
    frameScoreHolder.push(this.secondRoll);
  };
};
Game.prototype.finishFrame = function(frame) {
  var totalScore = 0;
  frameScoreHolder.forEach(function(score) {
    totalScore += score;
  });
  this.calculateTotalScore = totalScore;
  this._frames.push(frameScoreHolder);
  this.frameCount += 1
};
