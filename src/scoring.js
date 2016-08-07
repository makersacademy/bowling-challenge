'use strict';

var Scoring = function(){
  this._gameScore = [];
  this._currentFrame = [];
};

Scoring.prototype.isGutterGame = function(score) {
  var result = score == 0 ? true : false;
  return result;
};

Scoring.prototype.frameScore = function(rollOneScore, rollTwoScore) {
  var result = rollOneScore + rollTwoScore;
  return result;
};

Scoring.prototype.saveFrameScore = function(frameScore) {
  this._gameScore.push(frameScore);
  this._currentFrame = [];
};

Scoring.prototype.getTotalScore = function() {
  var summedScore = this._gameScore.reduce(function(a, b) {
    return a + b;
  }, 0)
  return summedScore;
};

Scoring.prototype.roll = function() {
  if(this._gameScore.length == 10) {
    return "10 frames have been played - the game is now over.";
  };

  var rollResult = this.random();

  // if(rollResult == 10) {
  //   this._currentFrame.push(rollResult);
  // } else if(rollResult + this._currentFrame[0] == 10) {
  //   this._currentFrame.push(rollResult);
  // }

  if(rollResult == 10 || this._currentFrame.length > 1) {
    this._currentFrame.push(rollResult);
    var score = this.frameScore(this._currentFrame[0], this._currentFrame[1]);
    this.saveFrameScore(score);
  } else {
    this._currentFrame.push(rollResult);
    return rollResult;
  }
};

Scoring.prototype.pinsLeft = function(pins=this._currentFrame[0]) {
  if (pins != 10) {
    return 10 - pins;
  } else {
    return 0;
  }
};

Scoring.prototype.random = function(min=0, high=10) {
  var min = Math.ceil(0);
  var max = Math.floor(high);
  return Math.floor(Math.random() * (max - min)) + min;
};
