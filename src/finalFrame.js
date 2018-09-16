'use strict'


function Finalframe() {
  // The default pins might need to be 30 here .....to think about...
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.results = [];
  this.frameOver = false;
};


Finalframe.prototype.remainingPins = function() {
  return this.pins;
};
Finalframe.prototype.resultArray = function() {
  return this.results;
};



// Next step add logic to our rolls!

Finalframe.prototype.rollOne = function(num) {
  if(this.frameOver === true) {
    throw new Error('frame is complete');
  }
  if (num > 10 || num < 0) {
    throw new Error('Invalid score value');
  }
  this.pins -= num;
  this.results.push(num);
};

Finalframe.prototype.rollTwo = function(num) {
  if(this.frameOver === true) {
    throw new Error('frame is complete');
  }
  this.pins -= num;
  this.results.push(num);
  if (this.frameScore() < 10) {
    this.frameOver = true;
  }
};


Finalframe.prototype.rollThree = function(num) {
  if(this.frameOver === true) {
    throw new Error('frame is complete');
  }
  this.pins -= num;
  this.results.push(num);
  this.frameOver = true;
};







Finalframe.prototype.frameScore = function() {
  var total = 0;
  for(var i = 0; i < this.results.length; i++) {
      total += this.results[i];
  }
  return total;
  console.log(total);
};
