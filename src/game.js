"use strict";

var Game = function() {
  this.frames = [];
  this.gameScore = 0;
}

// **************** Class Functinos ******************

// Needs some validation check for number of frames not exceeding 10, total score not exceeding 300.

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  this.generateTotalScore();
};

Game.prototype.generateTotalScore = function() {
  this.gameScore = 0;

  for (var i = 0; i < this.frames.length; i++) {
    if ( i + 2 < this.frames.length ) {
      this.frames[i].calculateScore(this.frames[i + 1], this.frames[i + 2]);
    } else if (i + 1 < this.frames.length) {
      this.frames[i].calculateScore(this.frames[i + 1]);
    } else {
      this.frames[i].calculateScore();
    }

    this.gameScore += this.frames[i].score();
  }
};
