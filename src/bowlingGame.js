"use strict";

function BowlingGame() {
  this.total = 0;
  this.frames = 10;
  this.spare = false;
  this.frameScore = 0;
  this.strike = false;
}

BowlingGame.prototype.total = function() {
  return 0;
}

BowlingGame.prototype.firstShot = function(pins) {
  this.total = this.total + pins;
  this.frameScore += pins;
}

BowlingGame.prototype.secondShot = function(pins) {
  this.total = this.total + pins;
  this.frameScore += pins;
}

BowlingGame.prototype.currentSpareScore = function() {
  if(this.frameScore === 10) {
    this.spare = !this.spare;
  }
}

BowlingGame.prototype.frameScoreReset = function() {
    this.frameScore = 0;
}

BowlingGame.prototype.currentStrikeScore = function() {
  if(this.frameScore === 10) {
    this.strike = !this.Strike;
  }
}

