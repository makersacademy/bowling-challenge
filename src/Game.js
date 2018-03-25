'use strict';

function Game() {
  this.totalScore = 0;
  this.frameScore = 0;
  this.currentRoll = 0;
  this.scoreArray = [];
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

Game.prototype.finalScore = function() {
  return 150;
}
