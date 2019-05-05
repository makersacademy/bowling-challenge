"use strict";

var Game = function() {
  this.frames = [];
  this.gameScore = 0;
}

// **************** Class Functinos ******************
Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  this._generateTotalScore();
};


// **************** Private Functinos ******************
Game.prototype._generateTotalScore = function() {
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
