'use strict';

function ScoreCard () {
  this.frames = [];
  this.total = 0;
}

ScoreCard.prototype.getTotal = function () {
  return this.total;
};

ScoreCard.prototype.getFrames = function () {
  return this.frames;
};

ScoreCard.prototype.updateTotal = function (subtotal) {
  this.total += subtotal;
};

ScoreCard.prototype.updateFrames = function (frame) {
  this.frames.push(frame);
};
