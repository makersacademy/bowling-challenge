'use strict';

function Game() {
  this.PINS = [0,1,2,3,4,5,6,7,8,9,10];
  this.setUpPins = [];
  this.frameCount = 0;
  this.currentScore = [];
  this.score = [];
  this.sweep = false;
  this.scoreboard = new Scoreboard;
};

Game.prototype.rackUp = function(){
  if (this.frameCount < 10) {
    return this.setUpPins = this.PINS
  } else {
    throw new Error("Game Over! Please start a new game");
  };
};

Game.prototype.firstRoll = function(){
  var score = Math.floor(Math.random() * this.setUpPins.length);
  if (score === 10) {
    return this.currentScore.push('X');
  } else {
    return this.currentScore.push(score);
  };
};

Game.prototype.pinSweep = function(){
  if (this.currentScore != 'X') {
   this.setUpPins.splice(-(this.currentScore));
   return this.sweep = true;
  };
};

Game.prototype.secondRoll = function(){
  var score = Math.floor(Math.random() * this.setUpPins.length);
    return this.currentScore.push(score);
};

Game.prototype.newGame = function(){
  this.frameCount = 0;
};
