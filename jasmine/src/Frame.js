"use strict";

function Frame() {
  this.roll = 0;
  this.score = [];
  this.totalScore = 0;
};

Frame.prototype.performFrameActions = function(points) {
  this.checkUserInput(points);
  this.addPoints(points);
  this.checkSpare();
  this.checkStrike();
  this.nextRoll();
  this.sumPoints();
};

Frame.prototype.addPoints = function(points) {
  this.score.push(points);
};

Frame.prototype.nextRoll = function() {
  this.roll ++;
};

Frame.prototype.checkUserInput = function(points) {
  if (points > 10) {
    throw "Maximum score exceeded, please input a score of less than 10";
  };
  if ((this.score[0] + points) > 10) {
    throw "Maximum score for frame exceeded, rolls must add up to 10 or less";
  };
};


Frame.prototype.checkStrike = function() {
  if (this.roll === 0 && this.score[0] === 10) {
    this.nextRoll();
    return this.strike = true;
  };
};

Frame.prototype.checkSpare = function() {
  if (this.roll === 1 && (this.score[0] + this.score[1] === 10)) {
    return this.spare = true;
  };
};

Frame.prototype.sumPoints = function() {
  this.totalScore = this.score.reduce(function(a,b) {
    return a + b;
  });
};
