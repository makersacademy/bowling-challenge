'use strict'


function Finalframe() {
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.results = [];
};


Finalframe.prototype.remainingPins = function() {
  return this.pins;
};

Finalframe.prototype.rollOne = function(num) {
  this.pins -= num;
  this.results.push(num);
};

Finalframe.prototype.rollTwo = function(num) {
  this.pins -= num;
  this.results.push(num);
};


Finalframe.prototype.rollThree = function(num) {
  this.pins -= num;
  this.results.push(num);
};


Finalframe.prototype.frameScore = function() {
  var total = 0;
  for(var i = 0; i < this.results.length; i++) {
      total += this.results[i];
  }
  return total;
  console.log(total);
};
