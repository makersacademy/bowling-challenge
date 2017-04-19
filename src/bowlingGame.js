(function () {
   'use strict';
}());

function BowlingGame() {
  this.frames = [];
  this.total = 0;
  this.spare = false;
  this.strike = false;
  this.shots = 0;
  // this.secondScore = 0;
  // this.strikeValue = 10;
  // this.spareValue = 10;
}

BowlingGame.prototype.addShot = function(pins) {
  this.shots += pins;
  this.total += pins;
  // this.nextScore += pins;
  // if(this.spare === true) {
  //   this.addScoresWithSpare();
  // }
  // this.ifFirstShotIsTen();

  // $('<div>')
  //   .text(pins)
  //   .appendTo('body')
}

// BowlingGame.prototype.secondShot = function(pins) {
//   this.secondScore += pins;
//   this.total += pins;
//   this.ifFirstAndSecondAreTen();
//   this.checkTypeOfScore();
//   this.resetScores();


    // $('<div>')
    // .text(pins)
    // .appendTo('body')
// }
// BowlingGame.prototype.checkTypeOfScore = function(test) {
//   if(this.strike === true) {
//       this.addFrame(this.strikeValue + this.firstScore + this.secondScore);
//       this.addFrame(this.total + this.firstScore + this.secondScore);
//       this.strike = !this.strike;
//     } else if(this.spare === true) {
//         this.resetScores();
//     } else {
//       if(this.frames.length > 0) {
//         this.addFrame(this.total + this.firstScore + this.secondScore);
//       } else {
//         this.addFrame(this.firstScore + this.secondScore);
//       }
//     }
// }

// BowlingGame.prototype.addFrame = function(score) {
//   this.frames.push({ score: score });

//   //assuming the frames are already on the html

// }


// BowlingGame.prototype.addScoresWithSpare = function() {
//   if(this.spare === true) {
//       this.addFrame(this.spareValue + this.firstScore);
//       this.addFrame(this.total + this.firstScore + this.secondScore);
//       this.spare = !this.spare;
//   }
// }

// BowlingGame.prototype.resetScores = function() {
//   this.firstScore = 0;
//   this.secondScore = 0;
// }

// BowlingGame.prototype.ifFirstShotIsTen = function() {
//   if(this.firstScore === 10) {
//     this.strike = !this.strike;
//     this.resetScores();
//   }
// }

// BowlingGame.prototype.ifFirstAndSecondAreTen = function() {
//   if(this.firstScore + this.secondScore === 10) {
//     this.spare = !this.spare;
//   }
// }