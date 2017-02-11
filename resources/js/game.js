'use strict'
/*jshint esversion: 6 */

function Game() {
  this.frame = [];
  this.roll = 0;
  this.rollbonus = 0;
  this.scoreBoard = [];
  this.lastFrame = false;
}

var game = new Game()


Game.prototype.getFrame = function() {
  return this.frame
};

Game.prototype.getRoll = function() {
  return this.roll
};

Game.prototype.sumFrame = function() {
  return this.frame.reduce((a, b) => a + b, 0);
};

Game.prototype.bowl = function() {
  this.roll = Math.floor(Math.random() * 11);
};

Game.prototype.addToFrame = function() {
  if (this.frame.length < 2 && game.sumFrame() < 10) {
    this.frame.push(this.getRoll());
  }
};

Game.prototype.isFrameFull = function() {
  if (this.frame.length < 2 && this.sumFrame() < 10){
    return false;
  }else {
    return true;
  }
};

Game.prototype.isStrike = function(){
  if (this.frame.length === 1 && this.sumFrame() === 10){
    return true;
  }else {
    return false;
  }
};
Game.prototype.isSpare = function(){
  if (this.frame.length === 2 && this.sumFrame() === 10){
    return true;
  }else{
    return false;
  }
};

Game.prototype.lastFrameBowled = function(){
  if (this.scoreBoard.length > 0){
    return this.scoreBoard[this.scoreBoard.length - 1];
  }else {
    return [];
  }
};
