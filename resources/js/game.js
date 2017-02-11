'use strict'
/*jshint esversion: 6 */

function Game() {
  this.frame = [];
  this.roll = 0;
  this.scoreBoard = [];
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
  if (this.frame === []){
    this.roll = Math.floor(Math.random() * 11);
  }else {
    this.roll = Math.floor(Math.random() * (11 - this.sumFrame()));
  }
};

Game.prototype.addToFrame = function() {
  if (this.isFrameFull() === false ) {
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

Game.prototype.addFrameToBoard = function(){
  if (game.isFrameFull() === true){
    game.scoreBoard.push(game.frame);
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
