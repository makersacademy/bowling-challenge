'use strict';

function Game() {
  this.totalScore = 0;
  this.frameScore = 0;
  this.currentRoll = 0;
  this.finalScore = 0;
  this.scoreArray = [];
  this.scoreIndexSpare = [];
  this.roll1 = 0;
  this.roll2 = 0;

};

Game.prototype.roll = function(roll1, roll2) {
  this.frameScore = roll1 + roll2;
  this.currentRoll += 2

}

Game.prototype.score = function() {
  this.totalScore += this.frameScore;
  this.scoreArray.push(this.roll1, this.roll2);
}

Game.prototype.finalScore = function () {
  if (this.scoreIndexSpare.length > 0) {
    this.scoreIndexSpare.forEach(function (num) {
        this.finalScore = this.frameScore + this.scoreArray[num];
    });
  }
  else {
    this.finalScore = this.totalScore;
  }
};

Game.prototype.isSpare = function () {
  if (this.frameScore === 10) {
    this.scoreIndexSpare.push(this.currentRoll);
  };
};

// // Game.prototype.isSpare = function () {
// //   if(this.frameScore === 10) {
// //
// //   }
// }
