(function () {
   'use strict';
}());



function BowlingGame() {
  this.frames = [];
  this.total = 0;
  this.spare = false;
  this.strike = false;
  this.firstScore = 0;
  this.secondScore = 0;
  this.nextScore = 0;
  this.strikeValue = 10;
}

BowlingGame.prototype.firstShot = function(pins) {
  this.firstScore += pins;
  this.total += pins;
  this.nextScore += pins;
  if(this.spare === true) {
    this.addScores();
  }
  this.ifFirstScoreIsTen();
}

BowlingGame.prototype.secondShot = function(pins) {
  this.secondScore += pins;
  this.total += pins;
  this.nextScore += pins;
  if(this.firstScore + this.secondScore === 10) {
    this.spare = !this.spare;
  }
  this.ifStrike();
  this.ifSpare();
}

BowlingGame.prototype.addFrame = function(score) {
  this.frames.push({ score: score });
}

BowlingGame.prototype.addScores = function() {
  this.addFrame(this.total + this.nextScore);
}

BowlingGame.prototype.reset = function() {
  this.firstScore = 0;
  this.secondScore = 0;
}

BowlingGame.prototype.ifStrike = function(test) {
  if(this.strike === true) {
    if(this.frames.length > 0) {
      this.addFrame(this.total + this.nextScore);
    } else {
    this.addFrame(this.total);
    }
  }
  // this.strike = !this.strike;
}

BowlingGame.prototype.ifSpare = function() {
  if(this.spare === false) {
    if(this.frames.length > 0) {
      // this.nextScore = this.nextScore - 10;
      this.addFrame(this.total);
    } else {
      this.addFrame(this.total);
    }
  }
}

BowlingGame.prototype.ifFirstScoreIsTen = function() {
  if(this.firstScore === 10) {
    this.strike = !this.strike;
  // } else if(this.firstScore > 10) {
    // this.nextScore = this.nextScore - 10;
  }
}