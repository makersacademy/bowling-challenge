(function () {
   'use strict';
}());

const STRIKE_VALUE = 10;
const SPARE_VALUE = 10;

function BowlingGame() {
  this.frames = [];
  this.total = 0;
  this.spare = false;
  this.strike = false;
  this.firstScore = 0;
  this.secondScore = 0;
  this.strikeValue = 10;

}

BowlingGame.prototype.firstShot = function(pins) {
  this.firstScore += pins; //10
  this.total += pins;
  if (this.spare) {
    this.addScoresWithSpare();
  }
  this.handleStrikes(); //10
}

BowlingGame.prototype.secondShot = function(pins) {
  this.secondScore += pins;
  this.total += pins;
  this.handleSpares();
  this.checkTypeOfScore();
  this.resetScores();
}

BowlingGame.prototype.checkTypeOfScore = function(test) {
  if(this.strike) {
      this.addFrame(STRIKE_VALUE + this.firstScore + this.secondScore);
      this.addFrame(this.total);
      this.strike = !this.strike;
    } else if(this.spare) {
        this.resetScores();
    } else {
      if(this.frames.length > 0) {
        this.addFrame(this.total);
      } else {
        this.addFrame(this.firstScore + this.secondScore);
      }
    }
}

BowlingGame.prototype.addFrame = function(score) {
  this.frames.push({ score: score });

  // //assuming the frames are already on the html
  // $('.frame > p') //select all the elements with class .frames
  //   .eq(this.frames.length - 1) //limit selection only to element 5
  //   .text(score); //set text to value of pins

}


BowlingGame.prototype.addScoresWithSpare = function() {
  if(this.spare) {
      this.addFrame(SPARE_VALUE + this.firstScore);
      this.addFrame(this.total);
      this.spare = !this.spare;
  }
}

BowlingGame.prototype.resetScores = function() {
  this.firstScore = 0;
  this.secondScore = 0;
}

BowlingGame.prototype.handleStrikes = function() {
  if(this.firstScore === 10) {
    this.strike = !this.strike;
    this.resetScores();
  }
}

BowlingGame.prototype.handleSpares = function() {
  if(this.firstScore + this.secondScore === 10) {
    this.spare = !this.spare;
  }
}