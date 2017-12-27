'use strict';

function Frame() {
  this.score = 0;
  this.rollNumber = 1
  this.isFrameOver = false
  this.isStrike = false
};

Frame.prototype.bowl = function(num) {
  this.score += num;
  if (num === 10) {this.isStrike = true}
  if (this.rollNumber === 2 || num === 10) {
    this.isFrameOver = true
  } else { this.rollNumber += 1 }
}
