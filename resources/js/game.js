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

Game.prototype.lastFrameBowled = function(){
  if (this.scoreBoard.length > 0){
    return this.scoreBoard[this.scoreBoard.length - 1];
  }else {
    return [];
  }
};

Game.prototype.sumFrame = function(frame) {
  return frame.reduce((a, b) => a + b, 0);
};

Game.prototype.isStrike = function(frame){
  if (frame.length === 2 && frame[0] === 10){
    return true;
  }else {
    return false;
  }
};

Game.prototype.isSpare = function(frame){
  if (frame.length === 2 && this.sumFrame(frame) === 10 && frame[0] !== 10){
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

Game.prototype.isFrameFull = function() {
  if (this.frame.length < 2 && this.sumFrame(this.frame) < 10){
    return false;
  } else if (this.frame.length === 1 && this.frame[0] === 10){
    this.frame = [10,0];
    return true;
  } else {
    return true;
  }
};

Game.prototype.addToFrame = function() {
  if (this.isFrameFull() === false ) {
    this.frame.push(this.getRoll());
  }
};

Game.prototype.addFrameToBoard = function(){
  if (this.isStrike(this.lastFrameBowled()) && this.isFrameFull()) {
    var lastIndex = this.scoreBoard.length - 2
    this.scoreBoard.push(this.frame);
    this.scoreBoard[lastIndex][1] += this.sumFrame(this.lastFrameBowled());
    this.frame = []
  }else if (this.isSpare(this.lastFrameBowled()) && this.isFrameFull()) {
    this.scoreBoard.push(this.frame);
    var lastIndex = this.scoreBoard.length - 1
    this.scoreBoard[lastIndex][1] += (this.lastFrameBowled())[0];
  }else if(this.isFrameFull() === true){
    this.scoreBoard.push(this.frame);
  }
};

Game.prototype.nextFrame = function(){
  if (this.scoreBoard.length === 10 && this.isStrike(this.lastFrameBowled())){
    return "2 BONUS ROLLS";
  } else if (this.scoreBoard.length === 10 && this.isSpare(this.lastFrameBowled())){
    return "1 BONUS ROLL";
  } else if (this.scoreBoard.length === 10) {
    return "GAME FINISHED";
  } else {
    return "NEXT FRAME";
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
