'use strict';

function Game() {
  this.frameCount = 1;
  this.calculateScore = 0;
  this.calculateBonus = 0;
  this._frames = [];
}

function Frame() {
  this.firstRoll = 'TBC';
  this.secondRoll = 'TBC';
  this.thirdRoll = 'TBC';
}

Game.prototype.checkFrameCount = function() {
  return this.frameCount;
};

Game.prototype.checkScore = function() {
  return this.calculateScore;
};

Game.prototype.checkBonus = function() {
  return this.calculateBonus;
};

Game.prototype.startFirstFrame = function(frame) {
  this._frames.push(frame);
};

Frame.prototype.checkFirstRoll = function() {
  return this.firstRoll;
};

Frame.prototype.checkSecondRoll = function() {
  return this.secondRoll;
};

Frame.prototype.checkThirdRoll = function() {
  return this.thirdRoll;
};

Frame.prototype.inputScore = function(roll) {
  if(this.firstRoll === 'TBC') {
    this.firstRoll = roll;
    return this.firstRoll;
  } else if (this.secondRoll === 'TBC') {
    this.secondRoll = roll;
    return this.secondRoll;
  } else {
    this.thirdRoll = roll;
    return this.thirdRoll;
  };
};
