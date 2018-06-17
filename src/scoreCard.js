'use strict';

function Scorecard (frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen) {
  this.DEFAULT_SCORE = 0;
  this.totalScore = this.DEFAULT_SCORE;
  this.MINIMUM_SCORE = 0;
  this.MAXIMUM_SCORE = 300;
  this.frameOne = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameTwo = typeof frameTwo !== 'undefined' ? frameTwo : new Frame();
  this.frameThree = typeof frameThree !== 'undefined' ? frameThree : new Frame();
  this.frameFour = typeof frameFour !== 'undefined' ? frameFour : new Frame();
  this.frameFive = typeof frameFive !== 'undefined' ? frameFive : new Frame();
  this.frameSix = typeof frameSix !== 'undefined' ? frameSix : new Frame();
  this.frameSeven = typeof frameSeven !== 'undefined' ? frameSeven : new Frame();
  this.frameEight = typeof frameEight !== 'undefined' ? frameEight : new Frame();
  this.frameNine = typeof frameNine !== 'undefined' ? frameNine : new Frame();
  this.frameTen = typeof frameTen !== 'undefined' ? frameTen : new Frame();
};

Scorecard.prototype.calculateScore = function() {
  var sum = (this.frameOne.getCurrentFrameScore() + this.frameTwo.getCurrentFrameScore() + this.frameThree.getCurrentFrameScore() + this.frameFour.getCurrentFrameScore() + this.frameFive.getCurrentFrameScore() + this.frameSix.getCurrentFrameScore() + this.frameSeven.getCurrentFrameScore() + this.frameEight.getCurrentFrameScore() + this.frameNine.getCurrentFrameScore() + this.frameTen.getCurrentFrameScore())
  this.totalScore = sum;
  return this.totalScore;
};

Scorecard.prototype.isPerfectScore = function() {
  return this.totalScore === this.MAXIMUM_SCORE;
};

Scorecard.prototype.isGutterScore = function() {
  return this.totalScore === this.MINIMUM_SCORE;
};

Scorecard.prototype.reset = function() {
  this.totalScore = this.DEFAULT_SCORE;
};
