"use strict";

function Frame() {
  this.frameScore = new Array();

  this.record = function(pinCount) {
    this.frameScore.push(pinCount);
  }

  this.total = function() {
    return this.frameScore;
  }

  this.isComplete = function() {
    return (this.frameScore[0] >= 10) || (this.frameScore.length == 2) ? true : false;
  }
}
