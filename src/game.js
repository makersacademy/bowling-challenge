'use strict';

function Game() {
  this.scoreCard = [];
  this.frame = [];
  this.runningScore = 0;
};

 Game.prototype.roll  = function(number) {
   this.frame.push(number);
 };

 Game.prototype.empty = function() {
   this.scoreCard.push(this.frame[0] + this.frame[1]);
   this.currentScore();
   this.frame = [];
 };

 Game.prototype.currentScore = function() {
    this.runningScore += this.scoreCard[this.scoreCard.length -1];
  };
