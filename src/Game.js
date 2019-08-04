'use strict';
// var Frame = require('/Users/student/Projects/portfolio/Week-5/bowling/src/Frame.js');

function Game(){
  this.throws = [];
}

Game.prototype.shot = function(pins){
  this.throws.push(pins)

}

Game.prototype.score = function() {
  var total = 0;
  var throwIndex = 0;
  for (var i = 0; i < 10; i++) {
    if (this.throws[throwIndex] === 10) {
      total += (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2]);
      throwIndex += 1;
    }
    if (this.throws[throwIndex] + this.throws[throwIndex + 1] === 10) {
      total += (this.throws[throwIndex] + this.throws[throwIndex + 1] + this.throws[throwIndex + 2]);
      throwIndex += 2;
    }
    if (this.throws[throwIndex] + this.throws[throwIndex + 1] <= 10) {
      total += (this.throws[throwIndex] + this.throws[throwIndex + 1]);
      throwIndex += 2;
    }

  }
  return total
}
