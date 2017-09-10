'use strict';
/**
 * Insert Comment
 * @param {int} frames New instance of frame class.
 */

function Frames() {
  this.DEFAULT_FRAME_SCORES = [];
  this.DEFAULT_FRAME_TOTALS = [];
  this.DEFAULT_SPARE = false;
  this.DEFAULT_CURRENT_ROLL = 0;
  this.DEFAULT_TOTAL_SCORE = 0;
  this.STRIKE = 10;
  this.GUTTER = 0;

  this.currentRoll = this.DEFAULT_CURRENT_ROLL;
  this.spare = this.DEFAULT_SPARE;
  this.frameScores = this.DEFAULT_FRAME_SCORES;
  this.frameTotals = this.DEFAULT_FRAME_TOTALS;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
};

  Frames.prototype.getFrameScores = function() {
    return this.frameScores;
  };

  Frames.prototype.getFrameTotals = function() {
    return this.frameTotals;
  };

  Frames.prototype.getCurrentRoll = function() {
    return this.currentRoll;
  };

  Frames.protoype.updateFrameTotals = function() {
  };

  Frames.prototype.isASpare = function() {
  };

  Frames.prototype.isAStrike = function() {
  };

  Frames.prototype.isAGutterGame = function() {
    this.totalScore === 0 && (this.frameScores.length) === 21;
  };

  Frames.prototype.resetTest = function() {
    if (isAGutterGame) {
       reset;
    }
  };

  Frames.prototype.reset = function() {
    this.frameScores = this.DEFAULT_FRAME_SCORES;
    this.frameTotals = this.DEFAULT_FRAME_TOTALS;
    this.totalScore = this.DEFAULT_TOTAL_SCORE;
  };
