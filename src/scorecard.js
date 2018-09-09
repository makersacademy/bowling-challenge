'use strict'


function Scorecard() {
  this.frames = [];
  this.buildScores = [];
};



Scorecard.prototype.getFrames = function() {
  return this.frames;
};

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Scorecard.prototype.getScores = function() {
  this.frames.map
  return this.buildScores;
};

Scorecard.prototype.frameTotal = function(frameNumber) {

  var displayTotal = null;

  for(var i = 0; i <= frameNumber - 1; i++) {
  var array = this.frames[i].results;
  displayTotal += this.arraySum(array);
  };
  return displayTotal;
};


Scorecard.prototype.arraySum = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
};
