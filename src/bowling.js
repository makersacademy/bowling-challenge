'use strict';
function Score() {
  this.currentTotalScore = 0

}

Score.prototype.totalScore = function(frame) {
  return this.currentTotalScore += (frame.rollOne + frame.rollTwo);
}

function Frame() {
  this.rollOne = 0;
  this.rollTwo = 0;

};

Frame.prototype.play1 = function(pins) {
  return this.rollOne = pins;
};

Frame.prototype.play2 = function(pins) {
  return this.rollTwo = pins;
};

Frame.prototype.currentScore = function(roll) {
  return roll;
};

Frame.prototype.frameScore = function() {
  return this.rollOne + this.rollTwo;
};
