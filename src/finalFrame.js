'use strict'


'use strict'

function Frame() {
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this.results = [];
};


Frame.prototype.remainingPins = function() {
  return this.pins;
};

Frame.prototype.rollOne = function(num) {
  this.pins -= num;
  this.results.push(num);
};

Frame.prototype.rollTwo = function(num) {
  this.pins -= num;
  this.results.push(num);
};


Frame.prototype.frameScore = function() {
  var total = 0;
  for(var i = 0; i < this.results.length; i++) {
      total += this.results[i];
  }
  return total;
  console.log(total);
};
