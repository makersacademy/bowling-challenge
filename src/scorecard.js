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
  var x = frameNumber - 1;
  var displayTotal = null;

// this has to come first in the order
  if(this.frames[x].results[0] === 10 && typeof this.frames[x + 1] === 'undefined') {
    return displayTotal;
  };


  if(this.frames[x].results[0] === 10 && this.frames[x + 1].results[0] === 10 && this.frames[x + 2].results[0] === 10) {
    displayTotal = this.frames[x].frameScore() + this.frames[x + 1].frameScore() + this.frames[x + 2].frameScore();
    return displayTotal * frameNumber;
  };







  // thinking about spare logic below....to be implemented...
  // if(this.frames[frameNumber - 1].results[0] < 10 && this.arraySum(this.frames[frameNumber - 1].results) === 10) {
  //   return displayTotal;
  // };


  for(var i = 0; i <= x; i++) {
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
