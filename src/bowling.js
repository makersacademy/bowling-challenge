'use strict';

function Game() {
  this.frame1 = {roll1: 1, roll2: 4};
  this.frame2 = {roll1: 4, roll2: 5};
  this.frame3 = {roll1: 6, roll2: 4};
  this.frame4 = {roll1: 5, roll2: 5};
  this.frame5 = {roll1: 10, roll2: 0};
  this.frame6 = {roll1: 0, roll2: 1};
  this.frame7 = {roll1: 7, roll2: 3};
  this.frame8 = {roll1: 6, roll2: 4};
  this.frame9 = {roll1: 10, roll2: 0};
  this.frame10 = {roll1: 2, roll2: 8, roll3: 6};
}

Game.prototype.score = function(){
  return this.frame1["roll1"]+this.frame1["roll2"]
}

Game.prototype.isStrike = function(){
  return this.frame1["roll1"] === 10
}

Game.prototype.isSpare = function(){
  return (this.frame1["roll1"]+this.frame1["roll2"]) === 10
}
