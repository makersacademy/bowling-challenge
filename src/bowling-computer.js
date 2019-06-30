"use strict";

function Scorecard() {
  this.score = 0;
  this.frame = 1;
  this.roll = 1;
  this.pointsInAction = 0;
}

Scorecard.prototype.sumPointsPerFrame = function(pinfall) {
  if (this.roll === 2) {
    var frameScore = this.pointsInAction + pinfall;
    this.score += frameScore;
    this.frame++;
    this.roll = 1;
  } else {
    if (pinfall === 10) {
      this.score += pinfall;
      this.frame++;
      this.roll = 1;
    } else {
      this.pointsInAction = pinfall;
      this.roll++;
    }
  }
};
