'use strict';

function Scorecard (frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen) {
  this.DEFAULT_SCORE = 0;
  this.totalScore = this.DEFAULT_SCORE;
  this.MINIMUM_SCORE = 0;
  this.MAXIMUM_SCORE = 300;
  this.frameOne = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameTwo = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameThree = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameFour = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameFive = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameSix = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameSeven = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameEight = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameNine = typeof frameOne !== 'undefined' ? frameOne : new Frame();
  this.frameTen = typeof frameOne !== 'undefined' ? frameOne : new Frame();
};

Scorecard.prototype.calculateScore = function() {
  var sum = (this.frameOne.getCurrentFrameScore() + this.frameTwo.getCurrentFrameScore() + this.frameThree.getCurrentFrameScore() + this.frameFour.getCurrentFrameScore() + this.frameFive.getCurrentFrameScore() + this.frameSix.getCurrentFrameScore() + this.frameSeven.getCurrentFrameScore() + this.frameEight.getCurrentFrameScore() + this.frameNine.getCurrentFrameScore() + this.frameTen.getCurrentFrameScore())
  this.totalScore += sum;
  return this.totalScore;
};

Scorecard.prototype.isPerfectScore = function() {
  return this.totalScore === this.MAXIMUM_SCORE;
};

Scorecard.prototype.isGutterScore = function() {
  return this.totalScore === this.MINIMUM_SCORE;
};
