'use strict';
function Game() {
  this.score = 0;
  this.frame = 1;
}

Game.prototype.roll = function (points) {
  if(this.getFrame() > 10) {
    throw new Error("The game has finished. Start a new game to throw again.");
  }
  if(points < 0 || points > 10) {
    throw new Error("Invalid entry: points must be between 0-10")
  }
  this.score += points;
  this.frame += .5;
};

Game.prototype.getFrame = function() {
  return this.frame;
};

Game.prototype.getScore = function (){
  return this.score;
};
