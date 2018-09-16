'use strict'


function Scorecard() {
  this.frames = [];
  this.buildScores = [];
  this.totalScore = null;
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
  if(this.frames[x].results[0] === 10 && typeof this.frames[x + 1] === 'undefined' && this.frames.length < 10) {
    console.log('One!');
    return displayTotal;
  };

  if(this.frames[x].results[0] === 10 && this.frames[x].results[1] === 10 && this.frames[x].results[2] === 10) {
    displayTotal = this.frames[x].frameScore();
    console.log('TWO!');
    return displayTotal * frameNumber;
  };


  if(this.frames[x].results[0] === 10 && this.frames[x + 1].results[0] === 10 && this.frames[x + 1].results[1] === 10) {
    displayTotal = this.frames[x].frameScore() + this.frames[x + 1].frameScore();
    console.log('Three!');
    return displayTotal * frameNumber;
  };


  if(this.frames[x].results[0] === 10 && this.frames[x + 1].results[0] === 10 && this.frames[x + 2].results[0] === 10) {
    displayTotal = this.frames[x].frameScore() + this.frames[x + 1].frameScore() + this.frames[x + 2].frameScore();
    console.log('Four!');
    return displayTotal * frameNumber;
  };

  if(this.frames[x].results[0] < 10 && this.frames[x].remainingPins() === 0 && typeof this.frames[x + 1] === 'undefined') {
    console.log('FIVE!!');
    return displayTotal;
  };


//ok need to rebuild the calculation have completely misunderstood how this will all work!!!!
  if(this.frames[x].results[0] < 10 && this.frames[x].remainingPins() === 0 && typeof this.frames[x + 1] !== 'undefined') {
    for(let calcIndex = 0; calcIndex < this.frames.length - 1; calcIndex++) {
      displayTotal += this.frames[calcIndex].frameScore() + this.frames[calcIndex + 1].results[0];
    };
    console.log('SIX!!');
    return displayTotal;
  };

  if(this.frames.length === 10 && this.frames[9].results.length === 3) {
    displayTotal = this.frames[x].frameScore();
    console.log('SEVEN!');
    return displayTotal * frameNumber;
  };


  if(this.frames[x].results[0] < 10 && this.frames[x].remainingPins() > 0 && typeof this.frames[x + 1] === 'undefined') {
    for(let calcIndex = 0; calcIndex < this.frames.length - 1; calcIndex++) {

      // Think i will need to put all my if conditions inside this for loop
      // so ill build one big for loop and contain my if logic inside it?
      // ?????
      displayTotal += this.frames[calcIndex].frameScore() + this.frames[calcIndex + 1].results[0];
    };
    console.log('EIGHT!!!');
    return displayTotal;
  };



  for(var i = 0; i <= x; i++) {
    var array = this.frames[i].results;
    displayTotal += this.arraySum(array);
  };
  console.log('Hi im here!')
  return displayTotal;
};






Scorecard.prototype.arraySum = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
};
