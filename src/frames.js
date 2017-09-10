'use strict';
/**
 * Insert Comment
 * @param {int} frames New instance of frame class.
 */

function Frames() {
  this.DEFAULT_FRAME_SCORES = [];
  this.STRIKE = 10;
  this.GUTTER = 0;
  this.DEFAULT_SPARE = false;

  this.spare = this.DEFAULT_SPARE;
  this.frameScores = this.DEFAULT_FRAME_SCORES;
};

Frames.prototype.getAllFrameScores = function() {
  return this.frameScores;
};

Frames.prototype.isASpare = function() {
};
