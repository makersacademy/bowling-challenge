(function () {
   'use strict';
}());

function BowlingGame() {
  this.frames = [];
  // for (var i = 0; i < 10 ; i++) {
  //   this.frames.push(new Frame());
  // }
  this.total = 0;
  this.spare = false;
  this.strike = false;
  this.firstScore = 0;
  this.secondScore = 0;
}

BowlingGame.prototype.firstShot = function(pins) {
  this.firstScore += pins;

  if(this.spare === true) {
    this.addScores();
    this.firstScore = 0
  }
  if(this.firstScore === 10) {
    this.strike = !this.strike;
  }
}

BowlingGame.prototype.secondShot = function(pins) {
  this.secondScore += pins;
  if(this.firstScore + this.secondScore === 10) {
    this.spare = !this.spare;
  } else if(this.spare === false) {
    this.addScores();
  }
}

BowlingGame.prototype.addScores = function() {
  this.frames.push({ score: this.firstScore + this.secondScore })
}