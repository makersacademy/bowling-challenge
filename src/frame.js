'use strict'

function Frame() {
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.results = [];
  this.frameOver = false;
};

// Might need to instantiate every frame with default [null, null] and push it into scorecard before rolls, or even instantiate all 10 and push them all in first to create the card?!?!?!?


Frame.prototype.remainingPins = function() {
  return this.pins;
};

Frame.prototype.resultArray = function() {
  return this.results;
};


// Do i need two roll functions here, will it be ok with just one - to think about..

Frame.prototype.rollOne = function(num) {
  if (num > 10 || num < 0) {
    throw new Error('Invalid score value');
  }
  this.pins -= num;
  this.results.push(num);
  if(num === 10) {
    this.results.push(0);
    this.frameOver = true;
  }
};

Frame.prototype.rollTwo = function(num) {
  if(this.frameOver === true) {
    throw new Error('frame is complete');
  }
  this.pins -= num;
  this.results.push(num);
};

// possible implementation if i go with a single roll function???
// Frame.prototype.roll = function(num) {
//   if(this.frameOver === true) {
//     throw new Error('frame is complete');
//   }
//   if (num > 10 || num < 0) {
//     throw new Error('Invalid score value');
//   }
//   this.pins -= num;
//   this.results.push(num);
//   if(num === 10) {
//     this.results.push(0);
//     this.frameOver = true;
//   }
// };


Frame.prototype.frameScore = function() {
  var total = 0;
  for(var i = 0; i < this.results.length; i++) {
      total += this.results[i];
  }
  return total;
  // console.log(total);
};
