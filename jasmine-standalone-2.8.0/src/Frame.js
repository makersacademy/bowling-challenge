'use strict';

function Frame() {
  this.score = 0;
  this.rollNumber = 1
  this.isFrameOver = false
};

Frame.prototype.bowl = function(num) {
  this.score += num;
  if (this.rollNumber === 2 || num === 10) {
    this.isFrameOver = true
  } else { this.rollNumber += 1 }
}
