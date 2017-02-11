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

Game.prototype.sumFrame = function(frame) {
  return frame.reduce((a, b) => a + b, 0);
};

Game.prototype.isStrike = function(frame){
  if (frame.length === 1 && this.sumFrame(frame) === 10){
    return true;
  }else {
    return false;
  }
};
Game.prototype.isSpare = function(frame){
  if (frame.length === 2 && this.sumFrame(frame) === 10){
    return true;
  }else{
    return false;
  }
};

Game.prototype.bowl = function() {
  if (this.frame === []){
    this.roll = Math.floor(Math.random() * 11);
  }else {
    this.roll = Math.floor(Math.random() * (11 - this.sumFrame(this.frame)));
  }
};

Game.prototype.addToFrame = function() {
  if (this.isFrameFull() === false ) {
    this.frame.push(this.getRoll());
  }
};

Game.prototype.isFrameFull = function() {
  if (this.frame.length < 2 && this.sumFrame(this.frame) < 10){
    return false;
  }else {
    return true;
  }
};

Game.prototype.addFrameToBoard = function(){
  if (game.isStrike(game.lastFrameBowled()) && game.isFrameFull()) {
    game.scoreBoard.push(game.frame);
    game.scoreBoard[game.scoreBoard.length - 1][0] += game.sumFrame(this.lastFrameBowled());
    game.frame = []
  } else if (game.isSpare(game.lastFrameBowled()) && game.isFrameFull()) {
    game.scoreBoard.push(game.frame);
    game.scoreBoard[game.scoreBoard.length - 1][0] += (game.lastFrameBowled())[0];
  } else if (game.isFrameFull() === true){
    game.scoreBoard.push(game.frame);
  }
};



Game.prototype.lastFrameBowled = function(){
  if (this.scoreBoard.length > 0){
    return this.scoreBoard[this.scoreBoard.length - 1];
  }else {
    return [];
  }
};

Game.prototype.returnTotalScore = function(){
  if (this.scoreBoard.length > 0){
    var total = 0
    for (var i = 0; i < this.scoreBoard.length; i++){
      total += (this.scoreBoard[i]).reduce((a, b) => a + b, 0);}
    return total;
    } else {
      return 0;
    }
  };
