'use strict';

function Frame() {
  this.score = 0;
  this.rollNumber = 1
  this.rollOneScore = 0
  this.isFrameOver = false
  this.isStrike = false
  this.isSpare = false
};

Frame.prototype.bowl = function(num) {
  console.log("roll number " + this.rollNumber)
  this.score += num;
  if (num === 10) {this.isStrike = true}
  if (this.rollNumber === 2 && this.score === 10) {this.isSpare = true}
  if (this.rollNumber === 2 || num === 10) {
    this.isFrameOver = true
  } else {
    this.rollNumber += 1;
    this.rollOneScore = num;
   }
}
