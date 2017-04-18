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
  this.spareValue = 10;
}

BowlingGame.prototype.firstShot = function(pins) {
  this.firstScore += pins; // 2
  this.total += pins;
  // this.nextScore += pins;
  if(this.spare === true) {
    this.addScoresWithSpare();
  }
  this.ifFirstShotIsTen();
}

BowlingGame.prototype.secondShot = function(pins) {
  this.secondScore += pins; // 8
  this.total += pins;
  // this.nextScore += pins;
  this.ifFirstAndSecondAreTen();
  this.checkTypeOfScore();
  // this.ifSpare();
  this.resetScores();
}
BowlingGame.prototype.checkTypeOfScore = function(test) {
  if(this.strike === true) {
      this.addFrame(this.strikeValue + this.firstScore + this.secondScore); //10 2 2
      this.addFrame(this.total + this.firstScore + this.secondScore);
      this.strike = !this.strike;
    } else if(this.spare === true) {
        this.resetScores();
    } else {
      if(this.frames.length > 0) {
        this.addFrame(this.total + this.firstScore + this.secondScore);
      } else {
        this.addFrame(this.firstScore + this.secondScore);
      }
    }
}

BowlingGame.prototype.addFrame = function(score) {
  this.frames.push({ score: score });
}

BowlingGame.prototype.addScoresWithSpare = function() {
  // this.addFrame(this.total + this.nextScore);
  if(this.spare === true) {
      this.addFrame(this.spareValue + this.firstScore);
      this.addFrame(this.total + this.firstScore + this.secondScore);
      this.spare = !this.spare;
  }
}

BowlingGame.prototype.resetScores = function() {
  this.firstScore = 0;
  this.secondScore = 0;
}


BowlingGame.prototype.ifSpare = function() {
  if(this.spare === false) { // only push when spare true or strike true
    if(this.frames.length > 0) {
      // this.nextScore = this.nextScore - 10;
      this.addFrame(this.total);
    } else {
      // this.addFrame(this.total);
    }
  }
}

BowlingGame.prototype.ifFirstShotIsTen = function() {
  if(this.firstScore === 10) {
    this.strike = !this.strike;
    this.resetScores();
  }
}

BowlingGame.prototype.ifFirstAndSecondAreTen = function() {
  if(this.firstScore + this.secondScore === 10) {
    this.spare = !this.spare;
  }
}
